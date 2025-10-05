# QR Share Studio

เว็บหน้าเดียว สำหรับพิมพ์ข้อความ/ลิงก์แล้วสร้างเป็น QR ได้ทันที พร้อมดาวน์โหลด/แชร์ และลิงก์ส่งต่อ (?t=...).

- ใช้ไลบรารี `qrcode` (จะโหลดจากหลาย CDN และถูกแคชโดย Service Worker เพื่อใช้งานครั้งถัดไปแม้ออฟไลน์)
- โฟลเดอร์ `js/` รองรับการวางไฟล์ `qrcode.min.js` เอง หากต้องการไม่พึ่ง CDN เลย

## ใช้งานแบบไม่พึ่ง CDN เลย (แนะนำ)
1. ดาวน์โหลดไฟล์ `qrcode.min.js` จากหนึ่งในแหล่งต่อไปนี้ แล้ววางไว้ที่ `js/qrcode.min.js`
   - https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js
   - https://unpkg.com/qrcode@1.5.3/build/qrcode.min.js
   - https://cdnjs.cloudflare.com/ajax/libs/qrcode/1.5.3/qrcode.min.js
2. แค่รีเฟรชหน้าเว็บก็จบ (สคริปต์จะดึงจากไฟล์ใน repo ก่อน)

## โฮสต์บน GitHub Pages
Settings → Pages → Deploy from a branch → `main` / `(root)`.

เปิดใช้งานที่: `https://<username>.github.io/qrshare/`
