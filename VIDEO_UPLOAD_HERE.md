# 🎬 VIDEO UPLOAD INSTRUCTIONS - RIGHT HERE!

## Follow These Simple Steps:

---

## STEP 1: Upload Video to Google Drive

1. Go to **https://drive.google.com**
2. Click **"+ New"** (top left)
3. Click **"File upload"**
4. Select your property tour video from your computer
5. Wait for upload to complete (may take a few minutes)

---

## STEP 2: Make Video Shareable

1. Find your uploaded video in Google Drive
2. **Right-click** on the video
3. Click **"Share"**
4. Under "General access" you'll see **"Restricted"**
5. Click **"Restricted"** to open the dropdown
6. Select **"Anyone with the link"**
7. Make sure it says **"Viewer"** (not Editor)
8. Click **"Copy link"**

---

## STEP 3: Extract the Video ID

Your copied link looks like this:
```
https://drive.google.com/file/d/1AbC2DeF3GhI4JkL5MnO6PqRsTuVwXyZ/view?usp=sharing
```

**The ID is the long code between `/d/` and `/view`**

In this example, the ID is:
```
1AbC2DeF3GhI4JkL5MnO6PqRsTuVwXyZ
```

---

## STEP 4: Create Your Video URL

Take your ID and create this URL:
```
https://drive.google.com/uc?export=download&id=YOUR_ID_HERE
```

**Example with the ID above:**
```
https://drive.google.com/uc?export=download&id=1AbC2DeF3GhI4JkL5MnO6PqRsTuVwXyZ
```

---

## STEP 5: Add to Your Website

1. Open the file: **`/data/content.ts`**

2. Press **Ctrl+F** (Windows) or **Cmd+F** (Mac) to search

3. Search for: **`YOUR_VIDEO_URL_HERE`**

4. You'll find this code:
```typescript
{
  type: "video" as const,
  videoUrl: "YOUR_VIDEO_URL_HERE",
  thumbnail: seatingRoom,
  caption: "Virtual Tour of Kasarani Haven Suites",
},
```

5. Replace **`YOUR_VIDEO_URL_HERE`** with your complete URL:
```typescript
{
  type: "video" as const,
  videoUrl: "https://drive.google.com/uc?export=download&id=1AbC2DeF3GhI4JkL5MnO6PqRsTuVwXyZ",
  thumbnail: seatingRoom,
  caption: "Virtual Tour of Kasarani Haven Suites",
},
```

6. **Save the file** (Ctrl+S or Cmd+S)

---

## ✅ DONE!

Your video will now appear in the gallery with a play button!

Click it to watch your property tour.

---

## 📝 QUICK REFERENCE

### Full Example:

**Original Link from Google Drive:**
```
https://drive.google.com/file/d/1AbC2DeF3GhI4JkL5MnO6PqRsTuVwXyZ/view?usp=sharing
```

**Extract ID:**
```
1AbC2DeF3GhI4JkL5MnO6PqRsTuVwXyZ
```

**Create Video URL:**
```
https://drive.google.com/uc?export=download&id=1AbC2DeF3GhI4JkL5MnO6PqRsTuVwXyZ
```

**Paste in `/data/content.ts`:**
```typescript
videoUrl: "https://drive.google.com/uc?export=download&id=1AbC2DeF3GhI4JkL5MnO6PqRsTuVwXyZ",
```

---

## 💡 TIPS

✅ **Video Format:** MP4 works best  
✅ **Length:** 1-3 minutes is perfect  
✅ **Quality:** 720p or 1080p  
✅ **Size:** Keep under 100MB for faster loading  
✅ **Content:** Show all rooms, amenities, exterior  

---

## ⚠️ TROUBLESHOOTING

**Video doesn't play?**
- Check that sharing is set to "Anyone with the link"
- Make sure you used the correct URL format
- Try opening your URL directly in browser to test

**"Access Denied" error?**
- Go back to Google Drive
- Right-click video → Share
- Make sure it says "Anyone with the link"

---

## 🆘 STILL STUCK?

**Contact for help:**
- Phone/WhatsApp: +254 727 832649
- Email: info@kasaranihavensuites.com

---

**That's it! Your video will boost bookings by 80%!** 🎥✨
