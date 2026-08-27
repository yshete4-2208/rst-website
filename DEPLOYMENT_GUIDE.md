# RST Website - Deployment Guide
**Domain:** rst1718.in | **GitHub:** yshete4-2208 | **Vercel ID:** mphUlOPV8WY83n1VSdT8O9B7

---

## 🎯 Step-by-Step Deployment Instructions

### **STEP 1: Add Your Company Logo** ⚠️ IMPORTANT

Your website currently uses a placeholder logo. You MUST add your actual company logo.

#### What to Do:
1. **Find your logo file** (the image you showed me earlier with blue/orange wings)
2. **Save it** to this folder:
   ```
   H:\0_SYS\Documents\rst-website\images\
   ```
3. **Rename it** to: `rst-logo.png` (or `.jpg` if it's JPEG)
4. **Replace** the current `rst-logo.svg` file

#### To Update the HTML (if you use JPG instead of PNG):
1. Open: `H:\0_SYS\Documents\rst-website\index.html`
2. Find line 30: `<img src="images/rst-logo.png"`
3. Change `rst-logo.png` to match your filename if needed

---

### **STEP 2: Create GitHub Repository**

#### Option A: Using GitHub Web Interface (Easiest)

1. **Go to GitHub**: https://github.com/yshete4-2208
2. **Click** "+" icon (top right) → **"New repository"**
3. **Fill in:**
   - Repository name: `rst-website`
   - Description: `RST Project Management Consultancy Website`
   - Select: **Public**
4. **Click** "Create repository"
5. **Copy the URL** shown (will look like `https://github.com/yshete4-2208/rst-website.git`)

#### Option B: Using Git Command Line

```bash
# Navigate to the website folder
cd "H:\0_SYS\Documents\rst-website"

# Configure git (one time only)
git config --global user.email "info@rst1718.in"
git config --global user.name "RST Consultancy"

# Add remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/yshete4-2208/rst-website.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

---

### **STEP 3: Deploy to Vercel**

#### Using Your Existing Vercel Account

1. **Go to Vercel**: https://vercel.com/dashboard
2. **Click** "Add New Project"
3. **Import from GitHub:**
   - Select: `rst-website` repository
   - Click "Import"
4. **Project Settings:**
   - Framework: Select "Other"
   - Build Command: Leave empty
   - Install Command: Leave empty
5. **Click** "Deploy" button

**✅ Your site will be live at:** `https://rst-website.vercel.app`

---

### **STEP 4: Connect Your Domain (rst1718.in)**

#### From Vercel Side:

1. **Go to your Vercel Project Settings**
2. **Click** "Domains"
3. **Add Domain:**
   - Enter: `rst1718.in`
   - Click "Add"
   - Also add: `www.rst1718.in`
4. **Copy the Nameserver information** shown

#### From GoDaddy Side:

1. **Go to GoDaddy**: https://www.godaddy.com
2. **Login** to your account
3. **Click** "My Products"
4. **Find** `rst1718.in` → Click **"Manage"**
5. **Look for** "Nameservers" or "DNS"
6. **Click** "Change Nameservers"
7. **Replace with Vercel's Nameservers:**
   - **NS1:** `ns1.vercel-dns.com`
   - **NS2:** `ns2.vercel-dns.com`
   - **NS3:** `ns3.vercel-dns.com`
   - **NS4:** `ns4.vercel-dns.com`
8. **Save changes**

⏳ **Wait 24-48 hours** for DNS propagation

---

### **STEP 5: Verify Your Domain is Live**

After 24-48 hours, check if your domain is working:

1. **Visit:** https://rst1718.in
2. **Should see** your professional RST website
3. **Check SSL:** Lock icon should appear in browser address bar

---

## 📋 Checklist

- [ ] **Logo Added** - Your company logo in `images/` folder
- [ ] **GitHub Repo Created** - Repository at github.com/yshete4-2208/rst-website
- [ ] **Code Pushed to GitHub** - All files committed and pushed
- [ ] **Vercel Deployment** - Website deployed and live at vercel.app URL
- [ ] **Domain Connected** - Nameservers updated in GoDaddy
- [ ] **DNS Propagation** - Website live at rst1718.in (24-48 hours)
- [ ] **HTTPS Active** - SSL certificate automatically configured

---

## 🔧 Future Updates

After your site is live, you can make changes anytime:

1. **Edit files** locally in `H:\0_SYS\Documents\rst-website\`
2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update services description"
   git push
   ```
3. **Vercel will auto-deploy** within seconds

---

## 📞 Need Help?

- **Contact Email:** info@rst1718.in
- **Phone:** +91 9156834002
- **LinkedIn:** https://www.linkedin.com/company/renuka-services-and-technology

---

## 🚀 Timeline

| Step | Action | Time | Status |
|------|--------|------|--------|
| 1 | Add Logo | 5 min | ⏳ Pending |
| 2 | Create GitHub Repo | 5 min | ⏳ Pending |
| 3 | Deploy to Vercel | 5 min | ⏳ Pending |
| 4 | Update GoDaddy DNS | 5 min | ⏳ Pending |
| 5 | Wait for DNS | 24-48 hrs | ⏳ Pending |
| 6 | **LIVE!** ✅ | Done | 🎉 Ready |

---

**Your website is ready to deploy! Follow the steps above to get rst1718.in live! 🚀**
