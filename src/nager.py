import qrcode
#finnagerAI
url = "https://www.figma.com/file/Bui3dcjmkSV2b9HbBbOubY/Untitled?type=design&node-id=0%3A1&mode=design&t=OXfLOydD6VtrgQGK-1"

qr = qrcode.QRCode(version=1, error_correction=qrcode.constants.ERROR_CORRECT_L, box_size=10, border=4)
qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")

img.save("figma_qr_code.png")
print("QR code generated and saved as 'figma_qr_code.png'")
