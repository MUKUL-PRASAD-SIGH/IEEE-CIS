import cv2
import os
import glob

# The 3 images
img_core = r"C:\Users\ASUS\.gemini\antigravity\brain\15b35791-6115-43f3-9595-ed69165835cc\media__1777571680695.png"
img_past = r"C:\Users\ASUS\.gemini\antigravity\brain\15b35791-6115-43f3-9595-ed69165835cc\media__1777571704093.png"
img_execom = r"C:\Users\ASUS\.gemini\antigravity\brain\15b35791-6115-43f3-9595-ed69165835cc\media__1777571741716.png"

out_dir = r"d:\IEEECIS\IEEE-CIS\public\team"
os.makedirs(out_dir, exist_ok=True)

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

def process_image(img_path, prefix, expected_count):
    print(f"Processing {img_path}")
    img = cv2.imread(img_path)
    if img is None:
        print("Failed to read image")
        return
        
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Try detecting faces
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.05, minNeighbors=3, minSize=(30, 30))
    print(f"Detected {len(faces)} faces (expected {expected_count})")
    
    # Sort faces top-to-bottom, left-to-right. 
    # Since they are in a grid, we sort by Y primarily (with a tolerance for same row), then X
    # Let's say if Y difference is less than 50 pixels, they are in the same row
    faces = list(faces)
    faces.sort(key=lambda f: (f[1]//100, f[0]))
    
    for idx, (x, y, w, h) in enumerate(faces):
        # Add 40% padding around the face
        pad_x = int(w * 0.4)
        pad_y = int(h * 0.4)
        
        y1 = max(0, y - pad_y)
        y2 = min(img.shape[0], y + h + pad_y)
        x1 = max(0, x - pad_x)
        x2 = min(img.shape[1], x + w + pad_x)
        
        face_img = img[y1:y2, x1:x2]
        
        # Save
        out_path = os.path.join(out_dir, f"{prefix}_{idx}.png")
        cv2.imwrite(out_path, face_img)
        print(f"Saved {out_path}")

process_image(img_core, "core", 5)
process_image(img_past, "past", 3)
process_image(img_execom, "execom", 15)
