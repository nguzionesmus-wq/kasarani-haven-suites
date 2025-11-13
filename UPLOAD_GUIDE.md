# 📤 Complete Guide: How to Upload Images & Videos

## Important Note About File Uploads

This website is a **static website** (HTML/CSS/JavaScript only). To add images and videos, you need to:

1. Upload your files to a hosting service (free options available!)
2. Get the direct URL to the file
3. Paste that URL into `/data/content.ts`

**Why?** Static websites can't store files directly. They need to reference files from other locations via URLs.

---

## 🖼️ HOW TO UPLOAD IMAGES

### Method 1: Imgur (Recommended - Easiest & Free)

1. Go to https://imgur.com
2. Click "New Post" (no account needed!)
3. Drag & drop your image or click to browse
4. Wait for upload to complete
5. Right-click the image → "Copy image address"
6. You'll get a URL like: `https://i.imgur.com/ABC123.jpg`
7. Paste this URL into `/data/content.ts`

**Example:**
```typescript
{
  type: "image" as const,
  src: "https://i.imgur.com/ABC123.jpg",
  caption: "Beautiful Bedroom",
},
```

---

### Method 2: Google Drive

1. Upload image to Google Drive
2. Right-click → "Get link"
3. Change sharing to "Anyone with the link can view"
4. Copy the link (looks like: `https://drive.google.com/file/d/ABC123/view`)
5. Convert to direct link:
   - Change to: `https://drive.google.com/uc?export=view&id=ABC123`
   - Replace `ABC123` with your actual file ID

**Example:**
```typescript
{
  type: "image" as const,
  src: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID",
  caption: "Cozy Living Room",
},
```

---

### Method 3: Dropbox

1. Upload to Dropbox
2. Get share link
3. Change `?dl=0` at the end to `?dl=1`
4. Use that URL

---

## 🎬 HOW TO UPLOAD VIDEOS

### Method 1: Google Drive (Best for Large Files)

1. Upload video to Google Drive
2. Right-click → "Get link"
3. Make sure sharing is "Anyone with the link"
4. Copy the file ID from the URL
5. Use this format: `https://drive.google.com/uc?export=download&id=YOUR_FILE_ID`

**Example:**
```typescript
{
  type: "video" as const,
  videoUrl: "https://drive.google.com/uc?export=download&id=ABC123XYZ",
  thumbnail: bedroom, // Use any of your images as thumbnail
  caption: "Property Virtual Tour",
},
```

---

### Method 2: Dropbox

1. Upload video to Dropbox
2. Get share link
3. Change `?dl=0` to `?dl=1` at the end
4. Use that URL

---

### Method 3: Video.link or Streamable (Free)

1. Go to https://video.link or https://streamable.com
2. Upload your video
3. Copy the direct video URL
4. Use in your code

---

## ✅ STEP-BY-STEP: Adding Your Files

### For Images:

1. **Upload** your image to Imgur/Google Drive/Dropbox
2. **Copy** the direct URL
3. **Open** `/data/content.ts` in this project
4. **Find** the `GALLERY_ITEMS` array
5. **Add** a new entry:

```typescript
{
  type: "image" as const,
  src: "PASTE_YOUR_URL_HERE",
  caption: "Describe your image",
},
```

6. **Save** the file
7. **Refresh** your website - image appears automatically!

---

### For Videos:

1. **Upload** your video to Google Drive/Dropbox
2. **Get** the direct video URL (see methods above)
3. **Open** `/data/content.ts`
4. **Find** the video placeholder
5. **Replace** `"ADD_YOUR_VIDEO_URL_HERE"` with your URL:

```typescript
{
  type: "video" as const,
  videoUrl: "YOUR_ACTUAL_VIDEO_URL",
  thumbnail: seatingRoom,
  caption: "Virtual Tour",
},
```

6. **Save** and refresh!

---

## 📸 Current Gallery Status

You currently have **7 real images** in your gallery:
- ✅ Living Room 1
- ✅ Living Room 2 
- ✅ Blue Sofa Seating Room
- ✅ Bedroom
- ✅ Kitchen
- ✅ Hallway
- ✅ Building Exterior

**Ready to add:**
- 🎬 1 video slot (just needs your URL)

---

## 🎯 Quick Checklist

- [ ] Take photos/videos of your property
- [ ] Upload to Imgur or Google Drive
- [ ] Get direct URLs
- [ ] Open `/data/content.ts`
- [ ] Paste URLs into `GALLERY_ITEMS` array
- [ ] Add captions
- [ ] Save file
- [ ] Refresh website
- [ ] ✨ Your content is live!

---

## 💡 Pro Tips

1. **Image Size**: Resize large images to 1920x1080px or smaller before uploading
2. **File Names**: Use descriptive names like `bedroom-view.jpg` not `IMG_1234.jpg`
3. **Quality**: Use high-quality images but compress them (use tinypng.com)
4. **Videos**: Keep videos under 2-3 minutes and compress them
5. **Consistency**: Use similar lighting/style for all photos

---

## ⚠️ Common Issues & Solutions

**Problem:** Image doesn't show
**Solution:** Make sure the URL ends with the image extension (.jpg, .png, etc.)

**Problem:** Video doesn't play
**Solution:** Ensure the URL is a DIRECT download/stream link, not a sharing page

**Problem:** "Access Denied" error
**Solution:** Check that sharing is set to "Anyone with the link can view"

---

## 📞 Need Help?

**Quick Help:**
1. Check that your URL works by pasting it directly in a browser
2. Make sure sharing permissions are set to "Anyone with link"
3. Verify the URL ends with the file extension

**Still stuck?**
Contact: info@kasaranihavensuites.com or +254 727 832649

---

## 🎉 That's It!

The system is designed to be simple:
1. Upload file → Get URL → Paste URL → Save

No complex technical knowledge needed! 

Happy uploading! 📸🎬
