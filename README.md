# Kasarani Haven Suites Website

A modern, SEO-optimized website for the best Airbnb in Kasarani.

## 🎯 Features

✅ **Booking Calendar** - Interactive calendar for date selection and booking via WhatsApp  
✅ **Image Gallery** - Showcases your property with lightbox view  
✅ **Video Support** - Add YouTube videos to the gallery  
✅ **Cookie Consent** - GDPR-compliant cookie banner  
✅ **Terms & Conditions** - Complete booking terms  
✅ **Blog Section** - Share travel tips and local guides  
✅ **SEO Optimized** - Includes keywords like "best airbnb in kasarani"  
✅ **Google Maps Integration** - Direct directions to your property  
✅ **WhatsApp Booking** - Direct booking through WhatsApp  
✅ **Responsive Design** - Works perfectly on all devices  

---

## 📝 How to Add Your Own Images & Videos

All content is managed in one file: `/data/content.ts`

### Adding Images to the Hero Section

1. Open `/data/content.ts`
2. Find the `HERO_IMAGES` array
3. Add your images like this:

\`\`\`typescript
export const HERO_IMAGES = [
  {
    src: livingRoom1,  // Already added
    alt: "Kasarani Haven Suites - Cozy Living Room",
  },
  // ADD NEW HERO IMAGES HERE:
  {
    src: "https://your-image-url.com/bedroom.jpg",
    alt: "Spacious Bedroom",
  },
];
\`\`\`

### Adding Images to the Gallery

1. Open `/data/content.ts`
2. Find the `GALLERY_ITEMS` array
3. Add images like this:

\`\`\`typescript
{
  type: "image" as const,
  src: "https://your-image-url.com/kitchen.jpg",
  caption: "Fully Equipped Kitchen",
},
\`\`\`

### Adding Videos to the Gallery

1. Upload your video to YouTube
2. Get the video ID from the URL
   - Example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID is: `dQw4w9WgXcQ`
3. Open `/data/content.ts`
4. Find the `GALLERY_ITEMS` array
5. Add your video:

\`\`\`typescript
{
  type: "video" as const,
  videoId: "dQw4w9WgXcQ",  // Replace with your actual video ID
  caption: "Virtual Tour of Kasarani Haven Suites",
},
\`\`\`

---

## 🔧 Updating Contact Information

All contact details are in `/data/content.ts` under `SITE_CONFIG`:

\`\`\`typescript
export const SITE_CONFIG = {
  siteName: "Kasarani Haven Suites",
  slogan: "A homely escape in the heart of Kasarani.",
  phone: "+254 727 832649",
  email: "info@kasaranihavensuites.com",
  // ... etc
};
\`\`\`

---

## 📱 Social Media Links

Update your social media handles in `/data/content.ts`:

\`\`\`typescript
socialMedia: {
  instagram: "@kasaranihavensuites",
  facebook: "facebook.com/kasaranihavensuites",
  tiktok: "@kasaranihaven",
  youtube: "youtube.com/@kasaranihavensuites",
},
\`\`\`

---

## 🎨 Adding Blog Posts

Edit the blog posts in `/components/Blog.tsx`:

\`\`\`typescript
const blogPosts = [
  {
    id: 1,
    title: "Your Blog Post Title",
    excerpt: "A short preview of your post...",
    author: "Kasarani Haven Team",
    date: "November 12, 2025",
    image: "https://your-image-url.com/blog-image.jpg",
    tags: ["Travel Tips", "Kasarani"],
  },
  // Add more posts here
];
\`\`\`

---

## 🔍 SEO Keywords

Current SEO keywords in `/data/content.ts`:

- best airbnb in kasarani
- kasarani accommodation
- airbnb nairobi
- kasarani haven suites
- short stay kasarani
- furnished apartment kasarani
- airbnb near nairobi cbd
- clayworks kasarani
- affordable airbnb nairobi

Add more keywords to improve search rankings!

---

## 📞 Contact & Support

**Phone:** +254 727 832649  
**Email:** info@kasaranihavensuites.com  
**Website created by:** Jaxcel Digital Marketing (JDM)

---

## 🚀 Quick Start Checklist

- [ ] Replace placeholder images in `/data/content.ts`
- [ ] Add your YouTube video ID for virtual tour
- [ ] Update blog posts with your own content
- [ ] Test WhatsApp booking link
- [ ] Test Google Maps directions link
- [ ] Review Terms & Conditions
- [ ] Test cookie consent banner
- [ ] Check all social media links
- [ ] Test booking calendar functionality

---

**Enjoy your new website! 🎉**
