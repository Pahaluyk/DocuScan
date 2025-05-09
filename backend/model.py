import cv2
import imutils
from skimage.filters import threshold_local
from transform import four_point_transform
import numpy as np

def scan_document(image_path):
    img = cv2.imread(image_path)

    ratio = img.shape[0] / 500.0
    img_resized = imutils.resize(img, height=500)
    gray_img = cv2.cvtColor(img_resized, cv2.COLOR_BGR2GRAY)

    blurred_image = cv2.GaussianBlur(gray_img, (5, 5), 0)

    edges = cv2.Canny(blurred_image, 75, 200)

    cnts, _ = cv2.findContours(edges.copy(), cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)

    cnts = sorted(cnts, key=cv2.contourArea, reverse=True)[:5]


    doc = None
    for c in cnts:
        peri = cv2.arcLength(c, True)
        approx = cv2.approxPolyDP(c, 0.02 * peri, True)
        if len(approx) == 4:
            doc = approx
            break

    if doc is None:
        print("Документ не найден.")
        return None

    warped = four_point_transform(img, doc.reshape(4, 2) * ratio)

    warped_gray = cv2.cvtColor(warped, cv2.COLOR_BGR2GRAY)
    
    T = threshold_local(warped_gray, 11, offset=10, method="gaussian")
    warped_binary = (warped_gray > T).astype("uint8") * 255

    return warped_binary

def save_scanned_image(image, output_path):
    cv2.imwrite(output_path, image)