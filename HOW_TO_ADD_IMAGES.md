# 📸 Quick Guide: How to Add Your Airbnb Images

## Step 1: Open the Content File

Navigate to `/data/content.ts` - this is where ALL your images are managed.

---

## Step 2: Adding Images to the Gallery

Find the `GALLERY_ITEMS` section and add your images:

\`\`\`typescript
export const GALLERY_ITEMS = [
  // EXISTING IMAGES (already in the gallery)
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
  
  // ⬇️ ADD YOUR NEW IMAGES HERE ⬇️
  
  // Example 1: Bedroom
  {
    type: "image" as const,
    src: "https://your-image-hosting-site.com/bedroom.jpg",
    caption: "Cozy Bedroom with Queen Bed",
  },
  
  // Example 2: Kitchen
  {
    type: "image" as const,
    src: "https://your-image-hosting-site.com/kitchen.jpg",
    caption: "Fully Equipped Modern Kitchen",
  },
  
  // Example 3: Bathroom
  {
    type: "image" as const,
    src: "https://your-image-hosting-site.com/bathroom.jpg",
    caption: "Clean Modern Bathroom",
  },
  
  // Example 4: Exterior
  {
    type: "image" as const,
    src: "https://your-image-hosting-site.com/exterior.jpg",
    caption: "Building Exterior View",
  },
  
  // ⬇️ ADD YOUR YOUTUBE VIDEO HERE ⬇️
  {
    type: "video" as const,
    videoId: "YOUR_YOUTUBE_VIDEO_ID", // Replace with actual ID
    caption: "Virtual Tour of Kasarani Haven Suites",
  },
];
\`\`\`

---

## Step 3: How to Get YouTube Video ID

1. Go to your YouTube video
2. Look at the URL: `https://www.youtube.com/watch?v=ABC123XYZ`
3. Copy everything after `v=` (in this case: `ABC123XYZ`)
4. Paste it as the `videoId` in the code above

---

## Step 4: Where to Host Your Images

You have several options:

### Option 1: Upload to Imgur (Recommended - Free & Easy)
1. Go to https://imgur.com
2. Click "New Post"
3. Upload your image
4. Right-click the image and select "Copy image address"
5. Use that URL in your code

### Option 2: Google Drive
1. Upload image to Google Drive
2. Right-click → Get link
3. Make sure it's set to "Anyone with the link can view"
4. Use the direct image URL

### Option 3: Your Own Website/Hosting
If you have web hosting, upload images there and use the full URL.

---

## Important Tips

✅ **Use high-quality images** - They represent your property!  
✅ **Optimize image size** - Large images load slowly. Aim for under 500KB per image  
✅ **Use descriptive captions** - Help guests understand what they're seeing  
✅ **Keep images consistent** - Similar lighting and style looks professional  
✅ **Update regularly** - Add new photos as you improve your property  

---

## Example: Complete Gallery with 8 Items

\`\`\`typescript
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
    src: "https://i.imgur.com/bedroom123.jpg",
    caption: "Cozy Bedroom with Queen Bed",
  },
  {
    type: "image" as const,
    src: "https://i.imgur.com/kitchen456.jpg",
    caption: "Fully Equipped Kitchen",
  },
  {
    type: "image" as const,
    src: "https://i.imgur.com/bathroom789.jpg",
    caption: "Modern Bathroom",
  },
  {
    type: "image" as const,
    src: "https://i.imgur.com/exterior012.jpg",
    caption: "Building Exterior",
  },
  {
    type: "image" as const,
    src: "https://i.imgur.com/amenities345.jpg",
    caption: "Nearby Amenities",
  },
  {
    type: "video" as const,
    videoId: "dQw4w9WgXcQ",
    caption: "Full Property Tour",
  },
];
\`\`\`

---

## Need Help?

Contact Jaxcel Digital Marketing (JDM):  
📞 +254 727 832649  
📧 info@kasaranihavensuites.com

---

**That's it! Your images will automatically appear in the gallery.** 🎉
