# 🎬 How to Add Videos from Your Laptop to the Gallery

The website now supports video files (MP4, WebM, etc.) directly in the gallery! Here's how to add your own videos.

---

## Step 1: Upload Your Video File

Since the video needs to be accessible via a URL, you have several options:

### Option A: Google Drive (Recommended - Free)

1. Go to https://drive.google.com
2. Click "New" → "File upload"
3. Select your video file
4. Once uploaded, right-click the video → "Get link"
5. Click "Change to anyone with the link"
6. Copy the link (it looks like: `https://drive.google.com/file/d/ABC123XYZ/view`)
7. Convert it to a direct video URL by changing it to:
   ```
   https://drive.google.com/uc?export=download&id=ABC123XYZ
   ```
   (Replace `ABC123XYZ` with your actual file ID)

### Option B: Dropbox

1. Upload your video to Dropbox
2. Get the share link
3. Change the end of the URL from `?dl=0` to `?dl=1`
4. This creates a direct download link

### Option C: Video Hosting Services

- **Vimeo**: Upload and use the embed URL
- **YouTube**: If you prefer YouTube, use the video ID method (see previous guide)

---

## Step 2: Add the Video to Your Gallery

1. Open `/data/content.ts`
2. Find the `GALLERY_ITEMS` array
3. Look for the video placeholder:

```typescript
{
  type: "video" as const,
  videoUrl: "ADD_YOUR_VIDEO_URL_HERE", // Replace with your video URL
  thumbnail: seatingRoom, // Use any image as thumbnail
  caption: "Virtual Tour of Kasarani Haven Suites",
},
```

4. Replace `"ADD_YOUR_VIDEO_URL_HERE"` with your actual video URL
5. Optionally change the thumbnail image
6. Update the caption

---

## Example: Complete Video Entry

```typescript
{
  type: "video" as const,
  videoUrl: "https://drive.google.com/uc?export=download&id=1a2b3c4d5e6f7g8h9i0j",
  thumbnail: seatingRoom,
  caption: "Full Property Tour - Kasarani Haven Suites",
},
```

---

## Step 3: Add More Gallery Images

You'll also see placeholders for 2 more images:

```typescript
// 📸 ADD 2 MORE IMAGES FROM YOUR LAPTOP HERE:
{
  type: "image" as const,
  src: "ADD_YOUR_IMAGE_URL_HERE", // Replace with your first image URL
  caption: "Add Your Caption Here",
},
{
  type: "image" as const,
  src: "ADD_YOUR_IMAGE_URL_HERE", // Replace with your second image URL
  caption: "Add Your Caption Here",
},
```

### To Add Images:

1. Upload images to Imgur, Google Drive, or any image hosting
2. Get the direct image URL
3. Replace `"ADD_YOUR_IMAGE_URL_HERE"` with your image URL
4. Add a descriptive caption

---

## Important Tips

✅ **Video Format**: MP4 works best for web compatibility  
✅ **File Size**: Keep videos under 50MB for faster loading  
✅ **Quality**: 720p or 1080p is ideal  
✅ **Length**: 1-3 minutes is perfect for property tours  
✅ **Thumbnail**: Use an attractive image from your property  

---

## Video File Size Recommendations

- **1-2 minutes**: Ideal length for property tours
- **720p quality**: Good balance of quality and file size
- **Under 50MB**: Ensures fast loading on mobile

---

## Example: Complete Gallery with Everything

```typescript
export const GALLERY_ITEMS = [
  {
    type: "image" as const,
    src: livingRoom1,
    caption: "Spacious Living Room with Smart TV",
  },
  {
    type: "image" as const,
    src: livingRoom2,
    caption: "Comfortable Seating Area",
  },
  {
    type: "image" as const,
    src: seatingRoom,
    caption: "Elegant Blue Sofa Seating Room",
  },
  {
    type: "image" as const,
    src: buildingExterior,
    caption: "Building Exterior - Clayworks, Kasarani",
  },
  {
    type: "video" as const,
    videoUrl: "https://drive.google.com/uc?export=download&id=YOUR_VIDEO_ID",
    thumbnail: seatingRoom,
    caption: "Complete Property Tour",
  },
  {
    type: "image" as const,
    src: "https://i.imgur.com/bedroom123.jpg",
    caption: "Master Bedroom",
  },
  {
    type: "image" as const,
    src: "https://i.imgur.com/kitchen456.jpg",
    caption: "Modern Kitchen",
  },
];
```

---

## Troubleshooting

**Video not playing?**
- Check that the URL is a direct video link (not a sharing page)
- Ensure the video format is MP4
- Try opening the URL directly in your browser to test

**Video loads slowly?**
- Compress your video file (use HandBrake or similar)
- Reduce resolution to 720p
- Consider using a dedicated video hosting service

---

## Need Help?

Contact us:  
📞 +254 727 832649  
📧 info@kasaranihavensuites.com

---

**Your gallery will automatically update once you save the file!** 🎉
