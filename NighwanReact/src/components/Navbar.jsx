"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/css/nighlogo.svg"
import "../assets/css/style.css"
import "../assets/css/responsive.css"
import "../assets/css/line.css"
import hwdIcon4 from "../assets/imgs/hwd-icon-4.svg"
import portfolio2 from "../assets/imgs/nav/navbarAI.png"
import portfolio1 from "../assets/imgs/nav/erp.png"
import portfolio3 from "../assets/imgs/nav/ecommerce.png"
import portfolio4 from "../assets/imgs/nav/iot.png"
import hrms from "../assets/imgs/hrms.png"
import serviceIcon1 from "../assets/imgs/service-icon-1.svg"
import serviceIcon7 from "../assets/imgs/service-icon-7.svg"
import serviceIcon4 from "../assets/imgs/service-icon-4.svg"

// Define CSS styles as JavaScript objects
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 8rem",
    height: "80px",
    backgroundColor: "#ffff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    zIndex: 1000,
    maxWidth: "2200px",
    margin: "0 auto",
    width: "100%",
    overflow: "visible", // Change from hidden to visible
    "@media (max-width: 1200px)": {
      padding: "0 2rem",
    },
    "@media (max-width: 1024px)": {
      padding: "0 1rem",
    },
    "@media (max-width: 768px)": {
      padding: "0 0.75rem",
    },
    "@media (max-width: 480px)": {
      padding: "0 0.5rem",
    },
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    height: "60px",
    padding: "5px 0",
    marginRight: "20px", // Add this to create space between logo and nav
    minWidth: "90px", // Ensure minimum width for the logo container
    "@media (max-width: 768px)": {
      marginRight: "0",
    },
    "@media (max-width: 480px)": {
      minWidth: "70px",
    },
  },
  logo: {
    display: "block",
    height: "100%",
    width: "auto",
  },
  logoImage: {
    height: "100%",
    width: "auto",
    maxHeight: "50px",
    objectFit: "contain",
    "@media (max-width: 768px)": {
      maxHeight: "40px",
    },
    "@media (max-width: 480px)": {
      maxHeight: "35px",
    },
  },
  navCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    "@media (max-width: 1024px)": {
      gap: "10px",
      justifyContent: "flex-end",
    },
    "@media (max-width: 768px)": {
      gap: "8px",
    },
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "25px",
    margin: 0,
    padding: 0,
    alignItems: "center", // Add this to align items vertically
  },
  navItem: {
    position: "relative",
  },
  navLink: {
    color: "#333",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "500",
    padding: "10px 0",
    cursor: "pointer",
    transition: "color 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    whiteSpace: "nowrap", // Add this to prevent line breaks
  },
  dropdownIcon: {
    fontSize: "12px",
    display: "inline-flex",
    alignItems: "center",
    transition: "transform 0.3s ease",
    marginLeft: "2px",
  },
  dropdownIconActive: {
    fontSize: "12px",
    display: "inline-flex",
    alignItems: "center",
    transform: "rotate(180deg)",
    transition: "transform 0.3s ease",
    marginLeft: "2px",
  },
  divider: {
    height: "30px",
    width: "1px",
    backgroundColor: "#ddd",
    margin: "0 15px",
    display: "block",
  },
  callUsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2px",

    "@media (max-width: 1024px)": {
      display: "none", // Hide on tablet and mobile
    },
  },
  callUs: {
    display: "flex",
    alignItems: "center",
    color: "#333",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    whiteSpace: "nowrap", // Add this to prevent line breaks
  },
  phoneNumber: {
    fontSize: "12px",
    color: "#666",
    textDecoration: "none",
    whiteSpace: "nowrap", // Add this to prevent line breaks
  },
  contactButton: {
    backgroundColor: "#0066cc",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "10px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    whiteSpace: "nowrap", // Add this to prevent line breaks
  },
  hamburger: {
    display: "none",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    marginLeft: "10px",
    "@media (max-width: 1024px)": {
      display: "block",
    },
    "@media (max-width: 768px)": {
      marginLeft: "8px",
    },
    "@media (max-width: 480px)": {
      marginLeft: "5px",
    },
  },
  mobileMenu: {
    position: "fixed",
    top: 0,
    right: "-100%",
    width: "100%",
    height: "100vh",
    backgroundColor: "#fff",
    zIndex: 2000,
    transition: "transform 0.3s ease-in-out",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    overflowY: "auto",
    transform: "translateX(100%)",
    WebkitOverflowScrolling: "touch", // Add smooth scrolling on iOS
  },
  mobileMenuVisible: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "#fff",
    zIndex: 2000,
    transition: "transform 0.3s ease-in-out",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    overflowY: "auto",
    transform: "translateX(0)",
    WebkitOverflowScrolling: "touch", // Add smooth scrolling on iOS
    maxHeight: "100vh", // Ensure it doesn't exceed viewport height
  },
  mobileMenuHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
  },
  mobileNavList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  mobileNavItem: {
    margin: "1rem 0",
  },
  mobileNavLink: {
    color: "#333",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    padding: "12px 0",
    display: "block",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#0066cc",
    },
  },
  mobileDropdownButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    background: "none",
    border: "none",
    textAlign: "left",
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
    padding: "10px 0",
    cursor: "pointer",
  },
  mobileDropdownContent: {
    marginLeft: "1rem",
    marginTop: "0.5rem",
    maxHeight: "0",
    opacity: 0,
    overflow: "hidden",
    transition: "all 0.3s ease",
  },
  mobileDropdownContentVisible: {
    marginLeft: "1rem",
    marginTop: "0.5rem",
    maxHeight: "70vh", // Changed from 1000px to 70vh for better control
    opacity: 1,
    overflow: "auto", // Changed from visible to auto to enable scrolling
    transition: "all 0.3s ease",
  },
  // Dropdown menu styles
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem",
    borderRadius: "8px",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.3s ease",
    width: "250px",
    zIndex: 1000,
    marginTop: "10px",
    pointerEvents: "none",
  },
  dropdownMenuVisible: {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem",
    borderRadius: "8px",
    opacity: 1,
    visibility: "visible",
    transition: "all 0.3s ease",
    width: "250px",
    zIndex: 1000,
    marginTop: "10px",
    pointerEvents: "auto",
  },
  // Services mega menu styles
  servicesMegaMenu: {
    position: "fixed",
    top: "80px",
    left: 0,
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    padding: "2rem 0",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.3s ease",
    width: "100vw",
    height: "auto",
    maxHeight: "500px",
    zIndex: 999,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
  },
  servicesMegaMenuVisible: {
    position: "fixed",
    top: "80px",
    left: 0,
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    padding: "2rem 0",
    opacity: 1,
    visibility: "visible",
    transition: "all 0.3s ease",
    width: "100vw",
    height: "auto",
    maxHeight: "500px",
    zIndex: 999,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
  },
  // Products mega menu styles
  productsMegaMenu: {
    position: "fixed",
    top: "80px",
    left: 0,
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    padding: "2rem 0",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.3s ease",
    width: "100vw",
    height: "auto",
    maxHeight: "500px",
    zIndex: 999,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
  },
  productsMegaMenuVisible: {
    position: "fixed",
    top: "80px",
    left: 0,
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    padding: "2rem 0",
    opacity: 1,
    visibility: "visible",
    transition: "all 0.3s ease",
    width: "100vw",
    height: "auto",
    maxHeight: "500px",
    zIndex: 999,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
  },
  megaMenuInner: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  megaMenuContainer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
    width: "100%",
  },
  menuContent: {
    display: "flex",
    gap: "2rem",
    marginBottom: "2rem",
  },
  productCard: {
    display: "flex",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "all 0.3s ease",
    marginBottom: "1rem",
    width: "100%",
    height: "120px",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    },
  },
  productImageContainer: {
    width: "180px",
    height: "120px",
    flexShrink: 0,
  },
  productImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  productContent: {
    padding: "1rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  productTitle: {
    margin: "0 0 0.5rem 0",
    fontSize: "12px",
    fontWeight: "600",
    color: "#333",
  },
  productDescription: {
    margin: 0,
    color: "#666",
    fontSize: "10px",
    lineHeight: "1.4",
  },
  productContainer: {
    display: "flex",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    alignItems: "flex-start",
  },
  productList: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  productRow: {
    display: "flex",
    gap: "1.5rem",
    width: "100%",
  },
  serviceCards: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "0.75rem",
    width: "400px",
  },
  serviceHeading: {
    fontSize: "1.1em",
    fontWeight: "600",
    color: "#333",
    marginBottom: "1rem",
    paddingBottom: "0.5rem",
    borderBottom: "2px solid #eee",
  },
  serviceCard: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "1rem",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    height: "70px",
    "&:hover": {
      backgroundColor: "#e9ecef",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
  },
  cardIcon: {
    width: "32px",
    height: "32px",
    flexShrink: 0,
  },
  cardIconImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  cardContent: {
    flex: 1,
    minWidth: 0,
  },
  cardTitle: {
    margin: 0,
    fontSize: "0.95em",
    fontWeight: "500",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "#333",
  },
  serviceColumns: {
    display: "flex",
    gap: "4rem",
    flex: 1,
  },
  serviceColumn: {
    flex: 1,
  },
  serviceList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  serviceItem: {
    padding: "0.5rem 0", // Reduced from 0.75rem to 0.5rem
    color: "#000",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#007bff",
    },
  },
  megaMenuLinks: {
    display: "flex",
    gap: "2rem",
    marginLeft: "2rem",
  },
  megaMenuLink: {
    flex: 1,
    maxWidth: "250px",
  },
  megaMenuLinkTitle: {
    margin: "0 0 1rem 0",
    fontSize: "1.1em",
    fontWeight: "600",
    color: "#333",
    borderBottom: "2px solid #eee",
    paddingBottom: "0.5rem",
  },
  megaMenuLinkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    columnCount: 2,
    columnGap: "1.5rem",
  },
  megaMenuLinkItem: {
    marginBottom: "0.5rem",
    breakInside: "avoid-column",
  },
  megaMenuLinkAnchor: {
    color: "#666",
    textDecoration: "none",
    fontSize: "1em",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#0066cc",
    },
  },
  megaMenuFooter: {
    borderTop: "1px solid #eee",
    paddingTop: "0.5rem",
    marginTop: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  megaMenuSocial: {
    display: "flex",
    gap: "1rem",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  megaMenuSocialItem: {
    margin: 0,
  },
  megaMenuSocialLink: {
    color: "#666",
    fontSize: "1.2em",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#007bff",
    },
  },
  megaMenuAds: {
    width: "280px",
    backgroundColor: "#f8f9fa",
    padding: "1.5rem",
    borderRadius: "12px",
    textAlign: "center",
  },
  megaMenuAdsImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "1rem",
    "@media (max-width: 1024px)": {
      height: "250px",
      objectFit: "contain",
    },
  },
  megaMenuAdsTitle: {
    margin: "0 0 0.75rem 0",
    fontSize: "1.2em",
    fontWeight: "600",
    color: "#333",
  },
  megaMenuAdsText: {
    // margin: "0 0 1rem 0",
    color: "#666",
    fontSize: "0.9em",
    lineHeight: "1.5",
    maxWidth: "220px",
    margin: "0 auto 1.25rem",
  },
  megaMenuAdsLink: {
    display: "inline-block",
    padding: "0.5rem 1rem",
    backgroundColor: "#0066cc",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#0052a3",
    },
  },
  // Portfolio card styles
  portfolioCard: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "all 0.3s ease",
    height: "100%",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    },
  },
  portfolioImageContainer: {
    height: "140px",
    overflow: "hidden",
  },
  portfolioImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  portfolioContent: {
    padding: "1rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  portfolioTitle: {
    margin: "0 0 0.5rem 0",
    fontSize: "1em",
    fontWeight: "600",
    color: "#333",
  },
  portfolioDescription: {
    margin: 0,
    color: "#666",
    fontSize: "0.85em",
    lineHeight: "1.4",
    display: "-webkit-box",
    "-webkit-line-clamp": "3",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  portfolioGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1rem",
    width: "100%",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPortfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false)
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)

      // Apply responsive styles directly
      if (window.innerWidth < 1024) {
        document.querySelectorAll(".call-info").forEach((el) => {
          el.style.display = "none"
        })
        // Add padding to body to account for fixed header
        document.body.style.paddingTop = "80px"
      } else {
        document.querySelectorAll(".call-info").forEach((el) => {
          el.style.display = "flex"
        })
        // Add padding to body to account for fixed header
        document.body.style.paddingTop = "80px"
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
      // Reset body padding when component unmounts
      document.body.style.paddingTop = "0"
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
    setPortfolioDropdownOpen(false)
    setServicesDropdownOpen(false)
    document.body.style.overflow = "auto"
  }

  const handlePortfolioDropdown = () => {
    if (!isMobile) {
      setPortfolioDropdownOpen(true)
      setServicesDropdownOpen(false)
      document.body.style.overflow = "hidden"
    }
  }

  const handleServicesDropdown = () => {
    if (!isMobile) {
      setServicesDropdownOpen(true)
      setPortfolioDropdownOpen(false)
      document.body.style.overflow = "hidden"
    }
  }

  const closeDropdowns = () => {
    if (!isMobile) {
      setPortfolioDropdownOpen(false)
      setServicesDropdownOpen(false)
      document.body.style.overflow = "auto"
    }
  }

  const togglePortfolioDropdown = (e) => {
    e.stopPropagation()
    setPortfolioDropdownOpen(!isPortfolioDropdownOpen)
    if (isServicesDropdownOpen) {
      setServicesDropdownOpen(false)
    }
  }

  const toggleServicesDropdown = (e) => {
    e.stopPropagation()
    setServicesDropdownOpen(!isServicesDropdownOpen)
    if (isPortfolioDropdownOpen) {
      setPortfolioDropdownOpen(false)
    }
  }

  const handleMobileDropdown = (type) => {
    if (type === 'services') {
      setServicesDropdownOpen(!isServicesDropdownOpen);
      if (isPortfolioDropdownOpen) setPortfolioDropdownOpen(false);
    } else if (type === 'portfolio') {
      setPortfolioDropdownOpen(!isPortfolioDropdownOpen);
      if (isServicesDropdownOpen) setServicesDropdownOpen(false);
    }
  };

  const mobileMenuStyles = {
    servicesDropdown: isServicesDropdownOpen ? styles.mobileDropdownContentVisible : styles.mobileDropdownContent,
    portfolioDropdown: isPortfolioDropdownOpen ? styles.mobileDropdownContentVisible : styles.mobileDropdownContent,
  };

  // Update styles based on mobile state
  const responsiveStyles = {
    navCenter: {
      ...styles.navCenter,
      display: isMobile ? "none" : "flex",
    },
    hamburger: {
      ...styles.hamburger,
      display: isMobile ? "block" : "none",
    },
    divider: {
      ...styles.divider,
      display: isMobile ? "none" : "block",
    },
    callUs: {
      ...styles.callUs,
      display: isMobile ? "none" : "flex",
    },
    navRight: {
      ...styles.navRight,
      justifyContent: isMobile ? "flex-end" : "flex-start",
    },
  }

  return (
    <header style={styles.header} className="fixed-header">
      {/* Logo */}
      <div style={styles.logoContainer}>
        <Link to="/" style={styles.logo}>
          <img src={logo || "/placeholder.svg"} alt="Logo" style={styles.logoImage} />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav style={responsiveStyles.navCenter}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link onClick={handleMenuItemClick} to="/" style={styles.navLink}>
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link onClick={handleMenuItemClick} to="/our-roots" style={styles.navLink}>
              Our Roots
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link onClick={handleMenuItemClick} to="/lean" style={styles.navLink}>
              Lean Consultancy
            </Link>
          </li>
          <li style={styles.navItem} onMouseEnter={handleServicesDropdown} onMouseLeave={closeDropdowns}>
            <Link to="/service" onClick={isMobile ? handleMenuItemClick : null} style={styles.navLink}>
              Services
              <span
                style={isServicesDropdownOpen ? styles.dropdownIconActive : styles.dropdownIcon}
                onClick={toggleServicesDropdown}
              >
                <i className={`las ${isServicesDropdownOpen ? "la-angle-up" : "la-angle-down"}`}></i>
              </span>
            </Link>
            <div style={isServicesDropdownOpen ? styles.servicesMegaMenuVisible : styles.servicesMegaMenu}>
              <div style={styles.megaMenuInner}>
                <div style={styles.megaMenuContainer}>
                  <div style={styles.menuContent}>
                    <div>
                      <div style={styles.serviceCards}>
                        <Link to="/lean" onClick={handleMenuItemClick} style={{ textDecoration: "none" }}>
                          <div style={styles.serviceCard}>
                            <span style={styles.cardIcon}>
                              <img
                                src={serviceIcon1 || "/placeholder.svg"}
                                alt="Service"
                                style={styles.cardIconImage}
                              />
                            </span>
                            <div style={styles.cardContent}>
                              <h2 style={styles.cardTitle}>Lean Consultancy</h2>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/service-details/aim"
                          onClick={handleMenuItemClick}
                          style={{ textDecoration: "none" }}
                        >
                          <div style={styles.serviceCard}>
                            <span style={styles.cardIcon}>
                              <img
                                src={serviceIcon4 || "/placeholder.svg"}
                                alt="Service"
                                style={styles.cardIconImage}
                              />
                            </span>
                            <div style={styles.cardContent}>
                              <h2 style={styles.cardTitle}>AI/ML Solutions</h2>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/service-details/Data"
                          onClick={handleMenuItemClick}
                          style={{ textDecoration: "none" }}
                        >
                          <div style={styles.serviceCard}>
                            <span style={styles.cardIcon}>
                              <img src={hwdIcon4 || "/placeholder.svg"} alt="Service" style={styles.cardIconImage} />
                            </span>
                            <div style={styles.cardContent}>
                              <h2 style={styles.cardTitle}>Data Analytics</h2>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/service-details/Iot"
                          onClick={handleMenuItemClick}
                          style={{ textDecoration: "none" }}
                        >
                          <div style={styles.serviceCard}>
                            <span style={styles.cardIcon}>
                              <img
                                src={serviceIcon7 || "/placeholder.svg"}
                                alt="Service"
                                style={styles.cardIconImage}
                              />
                            </span>
                            <div style={styles.cardContent}>
                              <h2 style={styles.cardTitle}>IoT Solutions</h2>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div style={styles.serviceColumns}>
                      <div style={styles.serviceColumn}>
                        <h3 style={styles.serviceHeading}>Services</h3>

                        <ul style={styles.serviceList}>
                          <li style={styles.serviceItem}>
                            <Link
                              to="/lean"
                              onClick={handleMenuItemClick}
                              style={{ display: "block", width: "100%", height: "100%", color: "#333" }}
                            >
                              Lean Consultancy
                            </Link>
                          </li>
                          <li style={styles.serviceItem}>
                            <Link
                              to="/service-details/Branding"
                              onClick={handleMenuItemClick}
                              style={{ display: "block", width: "100%", height: "100%", color: "#333" }}
                            >
                              Branding
                            </Link>
                          </li>
                          <li style={styles.serviceItem}>
                            <Link
                              to="/service-details/ERP"
                              onClick={handleMenuItemClick}
                              style={{ display: "block", width: "100%", height: "100%", color: "#333" }}
                            >
                              ERP Development
                            </Link>
                          </li>
                          <li style={styles.serviceItem}>
                            <Link
                              to="/service-details/aim"
                              onClick={handleMenuItemClick}
                              style={{ display: "block", width: "100%", height: "100%", color: "#333" }}
                            >
                              AI/ML Solutions
                            </Link>
                          </li>
                          <li style={styles.serviceItem}>
                            <Link
                              to="/service-details/Web"
                              onClick={handleMenuItemClick}
                              style={{ display: "block", width: "100%", height: "100%", color: "#333" }}
                            >
                              Web / Mobile App
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div style={styles.serviceColumn}>
                        <ul style={styles.serviceList}>
                          <li style={styles.serviceItem}>
                            <Link
                              to="/service-details/Iot"
                              onClick={handleMenuItemClick}
                              style={{ display: "block", width: "100%", height: "100%", color: "#333" }}
                            >
                              IoT Solutions
                            </Link>
                          </li>
                          <li style={styles.serviceItem}>
                            <Link
                              to="/service-details/Digital"
                              onClick={handleMenuItemClick}
                              style={{ display: "block", width: "100%", height: "100%", color: "#333" }}
                            >
                              Digital Marketing
                            </Link>
                          </li>
                          <li style={styles.serviceItem}>
                            <Link
                              to="/service-details/Data"
                              onClick={handleMenuItemClick}
                              style={{ display: "block", width: "100%", height: "100%", color: "#333" }}
                            >
                              Data Analytics
                            </Link>
                          </li>
                          <li style={styles.serviceItem}>
                            <Link
                              to="/service-details/Devops"
                              onClick={handleMenuItemClick}
                              style={{ display: "block", width: "100%", height: "100%", color: "#333" }}
                            >
                              DevOps Services
                            </Link>
                          </li>
                          <li style={styles.serviceItem}>
                            <Link
                              to="/service-details/IT"
                              onClick={handleMenuItemClick}
                              style={{ display: "block", width: "100%", height: "100%", color: "#333" }}
                            >
                              IT Support & Maintenance
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div style={styles.megaMenuAds}>
                      <img src={hrms || "/placeholder.svg"} alt="iPad" style={styles.megaMenuAdsImage} />
                      <h2 style={styles.megaMenuAdsTitle}>Our product hits</h2>
                      <p style={styles.megaMenuAdsText}>
                        Our new best IT product of the <br />
                        year 2023.
                      </p>
                      <Link to="/products" onClick={handleMenuItemClick} style={styles.megaMenuAdsLink}>
                        View more
                      </Link>
                    </div>
                  </div>
                  <div style={styles.megaMenuFooter}>
                    <ul style={styles.megaMenuSocial}>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://www.facebook.com/Nighwantech"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-facebook"></i>
                        </a>
                      </li>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://x.com/nighwantech"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-x"></i>
                        </a>
                      </li>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://www.instagram.com/nighwantech/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-instagram"></i>
                        </a>
                      </li>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-linkedin"></i>
                        </a>
                      </li>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://www.youtube.com/@Nighwantech"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-youtube"></i>
                        </a>
                      </li>
                    </ul>
                    <p>
                      <span style={{ fontSize: "0.8em" }}>Looking for new career?</span>{" "}
                      <Link to="/career" onClick={handleMenuItemClick}>
                        We're hiring
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li style={styles.navItem} onMouseEnter={handlePortfolioDropdown} onMouseLeave={closeDropdowns}>
            <Link to="/products" onClick={isMobile ? handleMenuItemClick : null} style={styles.navLink}>
              Product
              <span
                style={isPortfolioDropdownOpen ? styles.dropdownIconActive : styles.dropdownIcon}
                onClick={togglePortfolioDropdown}
              >
                <i className={`las ${isPortfolioDropdownOpen ? "la-angle-up" : "la-angle-down"}`}></i>
              </span>
            </Link>
            <div style={isPortfolioDropdownOpen ? styles.productsMegaMenuVisible : styles.productsMegaMenu}>
              <div style={styles.megaMenuInner}>
                <div style={styles.megaMenuContainer}>
                  <div style={styles.menuContent}>
                    <div style={styles.productContainer}>
                      <div style={styles.productList}>
                        <div style={styles.productRow}>
                          <Link
                            to="/product-detail/erp"
                            onClick={handleMenuItemClick}
                            style={{ textDecoration: "none", width: "100%" }}
                          >
                            <div style={styles.productCard}>
                              <div style={styles.productImageContainer}>
                                <img
                                  src={portfolio1 || "/placeholder.svg"}
                                  alt="Portfolio"
                                  style={styles.productImage}
                                />
                              </div>
                              <div style={styles.productContent}>
                                <h3 style={styles.productTitle}>Nighwan ERP – AI-Powered Business Management</h3>
                                <p style={styles.productDescription}>
                                  A custom-built ERP system designed for businesses that need an integrated and
                                  intelligent management solution.
                                </p>
                              </div>
                            </div>
                          </Link>
                          <Link
                            to="/product-detail/ai"
                            onClick={handleMenuItemClick}
                            style={{ textDecoration: "none", width: "100%" }}
                          >
                            <div style={styles.productCard}>
                              <div style={styles.productImageContainer}>
                                <img
                                  src={portfolio2 || "/placeholder.svg"}
                                  alt="Portfolio"
                                  style={styles.productImage}
                                />
                              </div>
                              <div style={styles.productContent}>
                                <h3 style={styles.productTitle}>LeanPro – AI-Based Sales & Demand Forecasting</h3>
                                <p style={styles.productDescription}>
                                  An advanced AI/ML-driven predictive analytics tool designed for manufacturers and
                                  retailers to optimize inventory and sales.
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div style={styles.productRow}>
                          <Link
                            to="/product-detail/b2b"
                            onClick={handleMenuItemClick}
                            style={{ textDecoration: "none", width: "100%" }}
                          >
                            <div style={styles.productCard}>
                              <div style={styles.productImageContainer}>
                                <img
                                  src={portfolio3 || "/placeholder.svg"}
                                  alt="Portfolio"
                                  style={styles.productImage}
                                />
                              </div>
                              <div style={styles.productContent}>
                                <h3 style={styles.productTitle}>Nighwan B2B – Multi-Vendor E-Commerce Platform</h3>
                                <p style={styles.productDescription}>
                                  A next-gen B2B e-commerce platform that helps businesses list, sell, and manage their
                                  products seamlessly.
                                </p>
                              </div>
                            </div>
                          </Link>
                          <Link
                            to="/product-detail/iot"
                            onClick={handleMenuItemClick}
                            style={{ textDecoration: "none", width: "100%" }}
                          >
                            <div style={styles.productCard}>
                              <div style={styles.productImageContainer}>
                                <img
                                  src={portfolio4 || "/placeholder.svg"}
                                  alt="Portfolio"
                                  style={styles.productImage}
                                />
                              </div>
                              <div style={styles.productContent}>
                                <h3 style={styles.productTitle}>IoTGuard – Predictive Maintenance System</h3>
                                <p style={styles.productDescription}>
                                  A smart IoT solution that enables businesses to monitor and maintain equipment health
                                  in real-time.
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div style={styles.megaMenuAds}>
                        <img src={hrms || "/placeholder.svg"} alt="iPad" style={styles.megaMenuAdsImage} />
                        <h2 style={styles.megaMenuAdsTitle}>HRMS with Job Portal</h2>
                        <p style={styles.megaMenuAdsText}>
                          Download HRMS in your mobile <br />
                          for your daily usage.
                        </p>
                        <Link to="/products" onClick={handleMenuItemClick} style={styles.megaMenuAdsLink}>
                          View more
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div style={styles.megaMenuFooter}>
                    <ul style={styles.megaMenuSocial}>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://www.facebook.com/Nighwantech"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-facebook"></i>
                        </a>
                      </li>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://x.com/nighwantech"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-x"></i>
                        </a>
                      </li>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://www.instagram.com/nighwantech/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-instagram"></i>
                        </a>
                      </li>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-linkedin"></i>
                        </a>
                      </li>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://www.youtube.com/@Nighwantech"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-youtube"></i>
                        </a>
                      </li>
                    </ul>
                    <p>
                      <Link to="/products" onClick={handleMenuItemClick}>
                        View Product <i className="iconoir-arrow-up-right"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li style={styles.navItem}>
            <Link onClick={handleMenuItemClick} to="/career" style={styles.navLink}>
              Career
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link onClick={handleMenuItemClick} to="/blog" style={styles.navLink}>
              Blogs
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right Side */}
      <div style={responsiveStyles.navRight}>
        <div style={responsiveStyles.divider}></div>
        <div style={styles.callUsContainer} className="call-info">
          <a href="tel:+91 8294767697" style={styles.callUs} className="call-us">
            Call Us <i className="iconoir-arrow-up-right"></i>
          </a>
          <a href="tel:+91 8294767697" style={styles.phoneNumber} className="phone-number">
            +91 8294767697
          </a>
        </div>
        <Link to="/contact" className="theme-btn">
          Contact Us
        </Link>
        {isMobile && (
          <button style={responsiveStyles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
            ☰
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div style={isMenuOpen ? styles.mobileMenuVisible : styles.mobileMenu}>
        <div style={styles.mobileMenuHeader}>
          <div style={styles.logoContainer}>
            <Link to="/" style={styles.logo}>
              <img src={logo || "/placeholder.svg"} alt="Logo" style={styles.logoImage} />
            </Link>
          </div>
          <button style={styles.closeButton} onClick={toggleMenu}>
            ✕
          </button>
        </div>
        <ul style={styles.mobileNavList}>
          <li style={styles.mobileNavItem}>
            <Link to="/" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
              Home
            </Link>
          </li>
          <li style={styles.mobileNavItem}>
            <Link to="/our-roots" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
              Our Roots
            </Link>
          </li>
          <li style={styles.mobileNavItem}>
            <Link to="/lean" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
              Lean Consultancy
            </Link>
          </li>
          <li style={styles.mobileNavItem}>
            <button 
              style={styles.mobileDropdownButton}
              onClick={() => handleMobileDropdown('services')}
            >
              Services
              <span style={isServicesDropdownOpen ? styles.dropdownIconActive : styles.dropdownIcon}>
                <i className={`las ${isServicesDropdownOpen ? "la-angle-up" : "la-angle-down"}`}></i>
              </span>
            </button>
            <div style={mobileMenuStyles.servicesDropdown}>
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(2, 1fr)", 
                  gap: "0.75rem", 
                  marginBottom: "1.5rem" 
                }}>
                  <Link to="/lean" onClick={handleMenuItemClick} style={{ textDecoration: "none" }}>
                    <div style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "0.5rem", 
                      padding: "0.75rem", 
                      backgroundColor: "#f8f9fa", 
                      borderRadius: "8px" 
                    }}>
                      <span style={{ width: "24px", height: "24px", flexShrink: 0 }}>
                        <img
                          src={serviceIcon1 || "/placeholder.svg"}
                          alt="Service"
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                      </span>
                      <div>
                        <h2 style={{ margin: 0, fontSize: "0.9em", fontWeight: "500", color: "#000" }}>Lean Consultancy</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="/service-details/aim" onClick={handleMenuItemClick} style={{ textDecoration: "none" }}>
                    <div style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "0.5rem", 
                      padding: "0.75rem", 
                      backgroundColor: "#f8f9fa", 
                      borderRadius: "8px" 
                    }}>
                      <span style={{ width: "24px", height: "24px", flexShrink: 0 }}>
                        <img
                          src={serviceIcon4 || "/placeholder.svg"}
                          alt="Service"
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                      </span>
                      <div>
                        <h2 style={{ margin: 0, fontSize: "0.9em", fontWeight: "500", color: "#000" }}>AI/ML Solutions</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="/service-details/Data" onClick={handleMenuItemClick} style={{ textDecoration: "none" }}>
                    <div style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "0.5rem", 
                      padding: "0.75rem", 
                      backgroundColor: "#f8f9fa", 
                      borderRadius: "8px" 
                    }}>
                      <span style={{ width: "24px", height: "24px", flexShrink: 0 }}>
                        <img
                          src={hwdIcon4 || "/placeholder.svg"}
                          alt="Service"
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                      </span>
                      <div>
                        <h2 style={{ margin: 0, fontSize: "0.9em", fontWeight: "500", color: "#000" }}>Data Analytics</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="/service-details/Iot" onClick={handleMenuItemClick} style={{ textDecoration: "none" }}>
                    <div style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "0.5rem", 
                      padding: "0.75rem", 
                      backgroundColor: "#f8f9fa", 
                      borderRadius: "8px" 
                    }}>
                      <span style={{ width: "24px", height: "24px", flexShrink: 0 }}>
                        <img
                          src={serviceIcon7 || "/placeholder.svg"}
                          alt="Service"
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                      </span>
                      <div>
                        <h2 style={{ margin: 0, fontSize: "0.9em", fontWeight: "500", color: "#000" }}>IoT Solutions</h2>
                      </div>
                    </div>
                  </Link>
                </div>
                
                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ 
                    fontSize: "1em", 
                    fontWeight: "600", 
                    color: "#333", 
                    marginBottom: "0.75rem", 
                    paddingBottom: "0.5rem", 
                    borderBottom: "2px solid #eee" 
                  }}>Services</h3>
                  
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem" }}>
                    <div>
                      <Link to="/lean" style={{ 
                        display: "block", 
                        padding: "0.4rem 0", 
                        color: "#000", 
                        textDecoration: "none", 
                        fontSize: "0.9em" 
                      }} onClick={handleMenuItemClick}>
                        Lean Consultancy
                      </Link>
                      <Link to="/service-details/Branding" style={{ 
                        display: "block", 
                        padding: "0.4rem 0", 
                        color: "#000", 
                        textDecoration: "none", 
                        fontSize: "0.9em" 
                      }} onClick={handleMenuItemClick}>
                        Branding
                      </Link>
                      <Link to="/service-details/ERP" style={{ 
                        display: "block", 
                        padding: "0.4rem 0", 
                        color: "#000", 
                        textDecoration: "none", 
                        fontSize: "0.9em" 
                      }} onClick={handleMenuItemClick}>
                        ERP Development
                      </Link>
                      <Link to="/service-details/aim" style={{ 
                        display: "block", 
                        padding: "0.4rem 0", 
                        color: "#000", 
                        textDecoration: "none", 
                        fontSize: "0.9em" 
                      }} onClick={handleMenuItemClick}>
                        AI/ML Solutions
                      </Link>
                      <Link to="/service-details/Web" style={{ 
                        display: "block", 
                        padding: "0.4rem 0", 
                        color: "#000", 
                        textDecoration: "none", 
                        fontSize: "0.9em" 
                      }} onClick={handleMenuItemClick}>
                        Web / Mobile App
                      </Link>
                    </div>
                    <div>
                      <Link to="/service-details/Iot" style={{ 
                        display: "block", 
                        padding: "0.4rem 0", 
                        color: "#000", 
                        textDecoration: "none", 
                        fontSize: "0.9em" 
                      }} onClick={handleMenuItemClick}>
                        IoT Solutions
                      </Link>
                      <Link to="/service-details/Digital" style={{ 
                        display: "block", 
                        padding: "0.4rem 0", 
                        color: "#000", 
                        textDecoration: "none", 
                        fontSize: "0.9em" 
                      }} onClick={handleMenuItemClick}>
                        Digital Marketing
                      </Link>
                      <Link to="/service-details/Data" style={{ 
                        display: "block", 
                        padding: "0.4rem 0", 
                        color: "#000", 
                        textDecoration: "none", 
                        fontSize: "0.9em" 
                      }} onClick={handleMenuItemClick}>
                        Data Analytics
                      </Link>
                      <Link to="/service-details/Devops" style={{ 
                        display: "block", 
                        padding: "0.4rem 0", 
                        color: "#000", 
                        textDecoration: "none", 
                        fontSize: "0.9em" 
                      }} onClick={handleMenuItemClick}>
                        DevOps Services
                      </Link>
                      <Link to="/service-details/IT" style={{ 
                        display: "block", 
                        padding: "0.4rem 0", 
                        color: "#000", 
                        textDecoration: "none", 
                        fontSize: "0.9em" 
                      }} onClick={handleMenuItemClick}>
                        IT Support & Maintenance
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div style={{ 
                  borderTop: "1px solid #eee", 
                  paddingTop: "0.75rem", 
                  marginTop: "1rem", 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  width: "100%" 
                }}>
                  <ul style={{ 
                    display: "flex", 
                    gap: "0.75rem", 
                    listStyle: "none", 
                    padding: 0, 
                    margin: 0 
                  }}>
                    <li>
                      <a href="https://www.facebook.com/Nighwantech" target="_blank" rel="noopener noreferrer" style={{ color: "#666" }}>
                        <i className="iconoir-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/nighwantech" target="_blank" rel="noopener noreferrer" style={{ color: "#666" }}>
                        <i className="iconoir-x"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/nighwantech/" target="_blank" rel="noopener noreferrer" style={{ color: "#666" }}>
                        <i className="iconoir-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/" target="_blank" rel="noopener noreferrer" style={{ color: "#666" }}>
                        <i className="iconoir-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                  <p style={{ margin: 0, fontSize: "0.8em" }}>
                    <span>Looking for new career?</span>{" "}
                    <Link to="/career" onClick={handleMenuItemClick} style={{ color: "#0066cc" }}>
                      We're hiring
                    </Link>
                  </p>
                </div>
                
                <div style={{ 
                  width: "100%", 
                  backgroundColor: "#f8f9fa", 
                  padding: "1.25rem", 
                  borderRadius: "12px", 
                  textAlign: "center", 
                  marginTop: "1.5rem" 
                }}>
                  <img 
                    src={hrms || "/placeholder.svg"} 
                    alt="iPad" 
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "contain",
                      borderRadius: "8px",
                      marginBottom: "1rem"
                    }} 
                  />
                  <h2 style={{ 
                    margin: "0 0 0.75rem 0", 
                    fontSize: "1.2em", 
                    fontWeight: "600", 
                    color: "#333" 
                  }}>Our product hits</h2>
                  <p style={{ 
                    margin: "0 0 1rem 0", 
                    color: "#666", 
                    fontSize: "0.9em", 
                    lineHeight: "1.5" 
                  }}>
                    Our new best IT product of the <br />
                    year 2023.
                  </p>
                  <Link to="/products" onClick={handleMenuItemClick} style={{ 
                    display: "inline-block", 
                    padding: "0.5rem 1rem", 
                    backgroundColor: "#0066cc", 
                    color: "#fff", 
                    textDecoration: "none", 
                    borderRadius: "4px" 
                  }}>
                    View more
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li style={styles.mobileNavItem}>
            <button 
              style={styles.mobileDropdownButton}
              onClick={() => handleMobileDropdown('portfolio')}
            >
              Products
              <span style={isPortfolioDropdownOpen ? styles.dropdownIconActive : styles.dropdownIcon}>
                <i className={`las ${isPortfolioDropdownOpen ? "la-angle-up" : "la-angle-down"}`}></i>
              </span>
            </button>
            <div style={mobileMenuStyles.portfolioDropdown}>
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
                  <Link to="/product-detail/erp" onClick={handleMenuItemClick} style={{ textDecoration: "none" }}>
                    <div style={{ 
                      display: "flex", 
                      backgroundColor: "#f8f9fa", 
                      borderRadius: "8px", 
                      overflow: "hidden", 
                      height: "100px" 
                    }}>
                      <div style={{ width: "120px", height: "100px", flexShrink: 0 }}>
                        <img src={portfolio1 || "/placeholder.svg"} alt="Portfolio" style={{ 
                          width: "100%", 
                          height: "100%", 
                          objectFit: "cover" 
                        }} />
                      </div>
                      <div style={{ padding: "0.75rem", flex: 1 }}>
                        <h3 style={{ margin: "0 0 0.25rem 0", fontSize: "0.9em", fontWeight: "600", color: "#333" }}>
                          Nighwan ERP – AI-Powered Business Management
                        </h3>
                        <p style={{ margin: 0, color: "#666", fontSize: "0.8em", lineHeight: "1.4" }}>
                          A custom-built ERP system designed for businesses that need an integrated and intelligent management solution.
                        </p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link to="/product-detail/ai" onClick={handleMenuItemClick} style={{ textDecoration: "none" }}>
                    <div style={{ 
                      display: "flex", 
                      backgroundColor: "#f8f9fa", 
                      borderRadius: "8px", 
                      overflow: "hidden", 
                      height: "100px" 
                    }}>
                      <div style={{ width: "120px", height: "100px", flexShrink: 0 }}>
                        <img src={portfolio2 || "/placeholder.svg"} alt="Portfolio" style={{ 
                          width: "100%", 
                          height: "100%", 
                          objectFit: "cover" 
                        }} />
                      </div>
                      <div style={{ padding: "0.75rem", flex: 1 }}>
                        <h3 style={{ margin: "0 0 0.25rem 0", fontSize: "0.9em", fontWeight: "600", color: "#333" }}>
                          LeanPro – AI-Based Sales & Demand Forecasting
                        </h3>
                        <p style={{ margin: 0, color: "#666", fontSize: "0.8em", lineHeight: "1.4" }}>
                          An advanced AI/ML-driven predictive analytics tool designed for manufacturers and retailers to optimize inventory and sales.
                        </p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link to="/product-detail/b2b" onClick={handleMenuItemClick} style={{ textDecoration: "none" }}>
                    <div style={{ 
                      display: "flex", 
                      backgroundColor: "#f8f9fa", 
                      borderRadius: "8px", 
                      overflow: "hidden", 
                      height: "100px" 
                    }}>
                      <div style={{ width: "120px", height: "100px", flexShrink: 0 }}>
                        <img src={portfolio3 || "/placeholder.svg"} alt="Portfolio" style={{ 
                          width: "100%", 
                          height: "100%", 
                          objectFit: "cover" 
                        }} />
                      </div>
                      <div style={{ padding: "0.75rem", flex: 1 }}>
                        <h3 style={{ margin: "0 0 0.25rem 0", fontSize: "0.9em", fontWeight: "600", color: "#333" }}>
                          Nighwan B2B – Multi-Vendor E-Commerce Platform
                        </h3>
                        <p style={{ margin: 0, color: "#666", fontSize: "0.8em", lineHeight: "1.4" }}>
                          A next-gen B2B e-commerce platform that helps businesses list, sell, and manage their products seamlessly.
                        </p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link to="/product-detail/iot" onClick={handleMenuItemClick} style={{ textDecoration: "none" }}>
                    <div style={{ 
                      display: "flex", 
                      backgroundColor: "#f8f9fa", 
                      borderRadius: "8px", 
                      overflow: "hidden", 
                      height: "100px" 
                    }}>
                      <div style={{ width: "120px", height: "100px", flexShrink: 0 }}>
                        <img src={portfolio4 || "/placeholder.svg"} alt="Portfolio" style={{ 
                          width: "100%", 
                          height: "100%", 
                          objectFit: "cover" 
                        }} />
                      </div>
                      <div style={{ padding: "0.75rem", flex: 1 }}>
                        <h3 style={{ margin: "0 0 0.25rem 0", fontSize: "0.9em", fontWeight: "600", color: "#333" }}>
                          IoTGuard – Predictive Maintenance System
                        </h3>
                        <p style={{ margin: 0, color: "#666", fontSize: "0.8em", lineHeight: "1.4" }}>
                          A smart IoT solution that enables businesses to monitor and maintain equipment health in real-time.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                
                <div style={{ 
                  borderTop: "1px solid #eee", 
                  paddingTop: "0.75rem", 
                  marginTop: "1rem", 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  width: "100%" 
                }}>
                  <ul style={{ 
                    display: "flex", 
                    gap: "0.75rem", 
                    listStyle: "none", 
                    padding: 0, 
                    margin: 0 
                  }}>
                    <li>
                      <a href="https://www.facebook.com/Nighwantech" target="_blank" rel="noopener noreferrer" style={{ color: "#666" }}>
                        <i className="iconoir-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/nighwantech" target="_blank" rel="noopener noreferrer" style={{ color: "#666" }}>
                        <i className="iconoir-x"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/nighwantech/" target="_blank" rel="noopener noreferrer" style={{ color: "#666" }}>
                        <i className="iconoir-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/" target="_blank" rel="noopener noreferrer" style={{ color: "#666" }}>
                        <i className="iconoir-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                  <p style={{ margin: 0, fontSize: "0.8em" }}>
                    <Link to="/products" onClick={handleMenuItemClick} style={{ color: "#0066cc" }}>
                      View Product <i className="iconoir-arrow-up-right"></i>
                    </Link>
                  </p>
                </div>
                
                <div style={{ 
                  width: "100%", 
                  backgroundColor: "#f8f9fa", 
                  padding: "1.25rem", 
                  borderRadius: "12px", 
                  textAlign: "center", 
                  marginTop: "1.5rem" 
                }}>
                  <img 
                    src={hrms || "/placeholder.svg"} 
                    alt="iPad" 
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "contain",
                      borderRadius: "8px",
                      marginBottom: "1rem"
                    }} 
                  />
                  <h2 style={{ 
                    margin: "0 0 0.75rem 0", 
                    fontSize: "1.2em", 
                    fontWeight: "600", 
                    color: "#333" 
                  }}>HRMS with Job Portal</h2>
                  <p style={{ 
                    margin: "0 0 1rem 0", 
                    color: "#666", 
                    fontSize: "0.9em", 
                    lineHeight: "1.5" 
                  }}>
                    Download HRMS in your mobile <br />
                    for your daily usage.
                  </p>
                  <Link to="/products" onClick={handleMenuItemClick} style={{ 
                    display: "inline-block", 
                    padding: "0.5rem 1rem", 
                    backgroundColor: "#0066cc", 
                    color: "#fff", 
                    textDecoration: "none", 
                    borderRadius: "4px" 
                  }}>
                    View more
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li style={styles.mobileNavItem}>
            <Link to="/career" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
              Career
            </Link>
          </li>
          <li style={styles.mobileNavItem}>
            <Link to="/blog" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar