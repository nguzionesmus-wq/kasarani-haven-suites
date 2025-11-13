# 🎬 EASIEST WAY TO ADD YOUR VIDEO

## Quick 3-Step Process

### STEP 1: Upload to Google Drive
1. Go to **drive.google.com**
2. Click **"New"** → **"File upload"**
3. Select your property video from your computer
4. Wait for upload to finish

### STEP 2: Make It Shareable
1. **Right-click** your uploaded video
2. Click **"Share"**
3. Under "General access" click **"Restricted"**
4. Change to **"Anyone with the link"**
5. Make sure it says **"Viewer"**
6. Click **"Copy link"**

### STEP 3: Convert the Link
Your copied link looks like:
```
https://drive.google.com/file/d/1AbC2DeF3GhI4JkL5MnO6PqR/view?usp=sharing
```

**Extract the ID** (the long code between `/d/` and `/view`):
```
1AbC2DeF3GhI4JkL5MnO6PqR
```

**Create your video URL:**
```
https://drive.google.com/uc?export=download&id=1AbC2DeF3GhI4JkL5MnO6PqR
```

### STEP 4: Add to Website
1. Open file: **`/data/content.ts`**
2. Press `Ctrl+F` (or `Cmd+F` on Mac)
3. Search for: **`PASTE_YOUR_VIDEO_URL_HERE`**
4. Replace with your full URL
5. **Save the file**

**Done! Your video is live!** ✅

---

## Example

**BEFORE:**
```typescript
{
  type: "video" as const,
  videoUrl: "PASTE_YOUR_VIDEO_URL_HERE",
  thumbnail: welcomePoster,
  caption: "Virtual Tour of Kasarani Haven Suites",
},
```

**AFTER:**
```typescript
{
  type: "video" as const,
  videoUrl: "https://drive.google.com/uc?export=download&id=1AbC2DeF3GhI4JkL5MnO6PqR",
  thumbnail: welcomePoster,
  caption: "Virtual Tour of Kasarani Haven Suites",
},
```

---

## Tips

✅ **Best video format:** MP4  
✅ **Recommended length:** 1-3 minutes  
✅ **Quality:** 720p or 1080p  
✅ **File size:** Under 100MB  

---

## Alternative: Dropbox

1. Upload video to Dropbox
2. Click "Share"
3. Copy the link
4. Change `?dl=0` to `?dl=1` at the end
5. Use that URL in step 4

---

**Need help?** Call/WhatsApp: +254 727 832649
