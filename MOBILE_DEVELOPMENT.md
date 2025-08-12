# 📱 Mobile Development Guide

This guide explains how to properly test and develop the ReconFy marketing website for mobile devices.

## 🚀 Quick Start

### **Option 1: Use Mobile Simulation Script (Recommended)**
```bash
npm run mobile-sim
```
This starts the development server optimized for mobile testing on port 3002.

### **Option 2: Use Standard Mobile Script**
```bash
npm run mobile
```
This starts the development server accessible from mobile devices on port 3000.

### **Option 3: Use Regular Development**
```bash
npm run dev
```
Standard development server on localhost:3000.

## 🔧 Mobile Development Scripts

| Script | Port | Purpose | Best For |
|--------|------|---------|-----------|
| `npm run dev` | 3000 | Standard development | Desktop testing |
| `npm run mobile` | 3000 | Mobile accessible | Real mobile devices |
| `npm run mobile-dev` | 3001 | Mobile development | Mobile testing |
| `npm run mobile-sim` | 3002 | Mobile simulation | Browser dev tools |

## 📱 Testing Methods

### **1. Browser Device Simulation (Chrome DevTools)**
- Open Chrome DevTools (F12)
- Click the device toggle button (📱)
- Select a mobile device or custom dimensions
- **Important**: Use `npm run mobile-sim` for best results

### **2. Real Mobile Device Testing**
- Use `npm run mobile` or `npm run mobile-sim`
- Find your computer's IP address: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
- On mobile device, navigate to: `http://YOUR_IP:3000` (or 3001/3002)

### **3. Network Simulation**
- Chrome DevTools → Network tab
- Throttling dropdown → Select network condition
- Test different speeds: Slow 3G, Fast 3G, 4G

## 🛠️ Troubleshooting

### **Issue: "ERR_INTERNET_DISCONNECTED" in Mobile Simulation**
**Solution**: Use `npm run mobile-sim` instead of `npm run dev`

**Why this happens**: Browser mobile simulation tries to access network as a real mobile device would, but localhost connections fail.

### **Issue: Page Won't Refresh in Mobile Simulation**
**Solution**: 
1. Use `npm run mobile-sim`
2. Clear browser cache
3. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### **Issue: Slow Performance in Mobile Simulation**
**Solution**:
1. Check the performance metrics in the mobile dev overlay
2. Reduce 3D complexity in HeroSection
3. Optimize images with proper sizing

## 📊 Performance Monitoring

The mobile development helper shows:
- **FPS**: Frame rate for smooth animations
- **Memory**: JavaScript heap usage
- **Device Type**: Current device classification
- **Connection Status**: Online/offline state

## 🎯 Best Practices

### **1. Always Use Mobile Scripts for Testing**
```bash
# For browser simulation
npm run mobile-sim

# For real mobile devices
npm run mobile
```

### **2. Test Multiple Breakpoints**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### **3. Monitor Performance**
- Watch FPS in mobile dev overlay
- Check memory usage
- Test network conditions

### **4. Use Real Devices When Possible**
- Browser simulation has limitations
- Real devices show actual performance
- Test touch interactions properly

## 🔍 Configuration

Mobile development settings are in `config/mobile-dev.js`:

```javascript
export const mobileDevConfig = {
  simulation: {
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1200,
    },
    network: {
      conditions: {
        fast: { latency: 10, bandwidth: 10000 },
        slow: { latency: 100, bandwidth: 1000 },
        offline: { latency: 0, bandwidth: 0 },
      },
    },
  },
  performance: {
    monitorFPS: true,
    monitorMemory: true,
    thresholds: {
      fps: 30,
      memory: 50, // MB
    },
  },
}
```

## 🚨 Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| ERR_INTERNET_DISCONNECTED | Browser simulation network issues | Use `npm run mobile-sim` |
| Page won't refresh | Cache issues | Hard refresh or clear cache |
| Slow performance | High 3D complexity | Reduce particle count, optimize 3D |
| Memory issues | Large assets | Optimize images, lazy load components |

## 📱 Mobile-First Development

1. **Start with mobile design**
2. **Test on real devices**
3. **Use mobile scripts for development**
4. **Monitor performance metrics**
5. **Optimize for touch interactions**

## 🔗 Useful Commands

```bash
# Start mobile simulation server
npm run mobile-sim

# Check network configuration
ipconfig /all

# Find your IP address
ipconfig | findstr "IPv4"

# Test mobile accessibility
curl -I http://localhost:3002
```

## 📚 Additional Resources

- [Next.js Mobile Development](https://nextjs.org/docs/advanced-features/mobile)
- [Chrome DevTools Mobile](https://developers.google.com/web/tools/chrome-devtools/device-mode)
- [Web Performance Best Practices](https://web.dev/performance/)
- [Mobile-First Design](https://www.lukew.com/ff/entry.asp?933)

---

**Remember**: Always use the appropriate mobile development script for the type of testing you're doing! 🎯
