# 🎬 SIMPLE VIDEO UPLOAD GUIDE

## Your video slot is ready! Just follow these 3 easy steps:

---

## STEP 1: Upload to Google Drive

1. Go to **https://drive.google.com**
2. Click the **"+ New"** button (top left)
3. Click **"File upload"**
4. Select your property tour video
5. Wait for upload to complete ✓

---

## STEP 2: Get Your Video Link

1. Find your uploaded video in Google Drive
2. **Right-click** on the video
3. Click **"Get link"** or **"Share"**
4. Make sure it says **"Anyone with the link"** can view
5. Click **"Copy link"**

Your link will look like this:
```
https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing
```

6. **Important:** Take the part between `/d/` and `/view`

Example:
- Full link: `https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view`
- Your ID: `1a2b3c4d5e6f7g8h9i0j`

7. Create your direct link:
```
https://drive.google.com/uc?export=download&id=1a2b3c4d5e6f7g8h9i0j
```
(Replace `1a2b3c4d5e6f7g8h9i0j` with YOUR actual ID)

---

## STEP 3: Add to Your Website

1. Open the file called **`/data/content.ts`**

2. Scroll down to the **VIDEO UPLOAD SECTION**

3. Find this line:
```typescript
videoUrl: "PASTE_YOUR_VIDEO_URL_HERE",
```

4. Replace it with your video URL:
```typescript
videoUrl: "https://drive.google.com/uc?export=download&id=YOUR_ID_HERE",
```

5. **Save the file**

6. **Refresh your website** - Your video is now live! 🎉

---

## EXAMPLE

**Before:**
```typescript
{
  type: "video" as const,
  videoUrl: "PASTE_YOUR_VIDEO_URL_HERE",
  thumbnail: welcomePoster,
  caption: "Virtual Tour of Kasarani Haven Suites",
},
```

**After:**
```typescript
{
  type: "video" as const,
  videoUrl: "https://drive.google.com/uc?export=download&id=1a2b3c4d5e6f7g8h9i0j",
  thumbnail: welcomePoster,
  caption: "Virtual Tour of Kasarani Haven Suites",
},
```

---

## ALTERNATIVE: Dropbox

If you prefer Dropbox:

1. Upload video to Dropbox
2. Get shareable link
3. Change the end from `?dl=0` to `?dl=1`
4. Use that link in `/data/content.ts`

Example:
- Original: `https://www.dropbox.com/s/abc123/video.mp4?dl=0`
- Change to: `https://www.dropbox.com/s/abc123/video.mp4?dl=1`

---

## TIPS FOR BEST RESULTS

✅ **Video Length:** 1-3 minutes is perfect  
✅ **Quality:** 720p or 1080p HD  
✅ **File Size:** Under 100MB for faster loading  
✅ **Content:** Show all rooms, amenities, and location  
✅ **Lighting:** Shoot during daytime for best lighting  

---

## TROUBLESHOOTING

**Problem:** Video doesn't play  
**Solution:** Make sure the link ends with your file ID and uses the format:
`https://drive.google.com/uc?export=download&id=YOUR_ID`

**Problem:** "Access Denied" error  
**Solution:** Check sharing settings - must be "Anyone with the link can view"

**Problem:** Video loads slowly  
**Solution:** Compress your video to reduce file size (use HandBrake or similar tool)

---

## THAT'S IT!

Just 3 simple steps:
1. Upload to Google Drive
2. Get the link and convert it
3. Paste in `/data/content.ts`

**Your video will appear in the gallery with a play button!** ▶️

---

**Need help?**  
Contact: +254 727 832649 | info@kasaranihavensuites.com
