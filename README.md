# RST - Project Management Consultancy Website

Professional website for RST's Project Management Consultancy services focusing on EPC projects in Manufacturing and Civil sectors.

## Features

- ✅ Professional Design
- ✅ Responsive Layout (Mobile & Desktop)
- ✅ Services Showcase
- ✅ Contact Form
- ✅ Fast Loading
- ✅ SEO Optimized
- ✅ HTTPS Ready

## Project Structure

```
rst-website/
├── index.html           # Main website file
├── css/
│   └── style.css       # Styling
├── js/
│   └── script.js       # Interactive features
├── images/
│   └── rst-logo.svg    # Logo (replace with your PNG/JPG)
├── vercel.json         # Vercel configuration
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## Important: Adding Your Logo

1. **Replace the placeholder logo:**
   - Go to the `images` folder
   - Replace `rst-logo.svg` with your actual logo file
   - Name it `rst-logo.png` or `rst-logo.jpg`
   - Update the filename in `index.html` line ~30

2. **Update logo reference in HTML:**
   ```html
   <img src="images/rst-logo.png" alt="RST Logo" class="logo-img">
   ```

## Local Development

To run the website locally:

```bash
# Simply open in browser
open index.html

# Or use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

## Deployment to Vercel

### Step 1: Push to GitHub

1. Go to https://github.com/yshete4-2208
2. Create a new repository named `rst-website`
3. Run these commands in the project folder:

```bash
git config user.email "info@rst1718.in"
git config user.name "RST"
git add .
git commit -m "Initial RST website deployment"
git branch -M main
git remote add origin https://github.com/yshete4-2208/rst-website.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Select the `rst-website` repository
5. Click "Deploy"

### Step 3: Connect Your Domain (rst1718.in from GoDaddy)

After Vercel deployment, connect your GoDaddy domain:

1. **Get Vercel DNS Records:**
   - Go to your Vercel project settings
   - Find "Domains" section
   - Add your domain `rst1718.in`
   - Copy the NS (nameserver) records provided

2. **Update GoDaddy DNS:**
   - Log in to your GoDaddy account
   - Go to your domain settings (rst1718.in)
   - Find "Nameservers"
   - Replace with Vercel's nameservers
   - Save changes

3. **Wait for DNS propagation:**
   - Can take 24-48 hours
   - Check status at: https://www.whatsmydns.net/?q=rst1718.in

## Customization

### Update Contact Information
- Edit line ~380 in `index.html`:
  - Phone: +91 9156834002
  - Email: info@rst1718.in
  - LinkedIn: https://www.linkedin.com/company/renuka-services-and-technology

### Update Services
- Edit the services section (lines ~150-230)
- Add or modify service descriptions

### Change Colors
- Edit `css/style.css` root variables:
  ```css
  --primary: #0066cc;    /* Blue */
  --secondary: #ff6633;  /* Orange */
  ```

## Support

For issues or updates:
- Email: info@rst1718.in
- Phone: +91 9156834002

## License

© 2026 RST - Project Management Consultancy. All rights reserved.
