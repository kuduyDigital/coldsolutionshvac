---
name: "App"
description: "Design tokens extracted from https://www.coldsolutionshvac.com/"
colors:
  primary: "#053CF7"
  secondary: "#0D6EFD"
  tertiary: "#31FBED"
  surface: "#6C757D"
  on-surface: "#212529"
typography:
  headline-display:
    fontFamily: "Font Awesome 6 Pro"
    fontSize: "96px"
    fontWeight: 400
    lineHeight: 1
  headline-lg:
    fontFamily: "Oswald"
    fontSize: "56px"
    fontWeight: 700
    lineHeight: 1.2
  headline-display-2:
    fontFamily: "Oswald"
    fontSize: "40px"
    fontWeight: 300
    lineHeight: 1.2
  headline-lg-2:
    fontFamily: "Oswald"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1.4
  headline-lg-3:
    fontFamily: "Oswald"
    fontSize: "40px"
    fontWeight: 300
    lineHeight: 1.2
  body-md:
    fontFamily: "Oswald"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: 1.2
  headline-lg-4:
    fontFamily: "Oswald"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: 1.2
  headline-lg-5:
    fontFamily: "Oswald"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.2
  headline-lg-6:
    fontFamily: "Oswald"
    fontSize: "32px"
    fontWeight: 300
    lineHeight: 1.2
  body-md-2:
    fontFamily: "Oswald"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.2
  headline-lg-7:
    fontFamily: "Oswald"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1.2
  body-md-3:
    fontFamily: "Oswald"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1.2
  headline-md:
    fontFamily: "Oswald"
    fontSize: "28px"
    fontWeight: 300
    lineHeight: 1.2
  headline-md-2:
    fontFamily: "Oswald"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.2
  headline-md-3:
    fontFamily: "Oswald"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.2
  headline-sm:
    fontFamily: "Oswald"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.2
  label-lg:
    fontFamily: "Open Sans"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.5
  body-md-4:
    fontFamily: "Open Sans"
    fontSize: "20px"
    fontWeight: 300
    lineHeight: 1.5
  headline-sm-2:
    fontFamily: "Oswald"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.2
  body-md-5:
    fontFamily: "Open Sans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  body-md-6:
    fontFamily: "Open Sans"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.5
  label-md:
    fontFamily: "Open Sans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  body-md-7:
    fontFamily: "Open Sans"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.5
  label-md-2:
    fontFamily: "Open Sans"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.5
  label-lg-2:
    fontFamily: "Open Sans"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.5
  label-md-3:
    fontFamily: "Open Sans"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.5
  body-md-8:
    fontFamily: "Open Sans"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: 1.5
  headline-sm-3:
    fontFamily: "Oswald"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: 1.2
  body-md-9:
    fontFamily: "Font Awesome 6 Pro"
    fontSize: "16px"
    fontWeight: 900
    lineHeight: 1
  label-md-4:
    fontFamily: "Oswald"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: 1.2
  body-md-10:
    fontFamily: "Oswald"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: 1.2
  label-md-5:
    fontFamily: "Open Sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  body-md-11:
    fontFamily: "Font Awesome 6 Pro"
    fontSize: "14px"
    fontWeight: 900
    lineHeight: 1
  body-md-12:
    fontFamily: "Open Sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  body-md-13:
    fontFamily: "Font Awesome 6 Pro"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1
  label-md-6:
    fontFamily: "Open Sans"
    fontSize: "13.6px"
    fontWeight: 500
    lineHeight: 1.5
  body-md-14:
    fontFamily: "Open Sans"
    fontSize: "13.6px"
    fontWeight: 500
    lineHeight: 1.5
  label-lg-3:
    fontFamily: "Open Sans"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Font Awesome 6 Pro"
    fontSize: "12px"
    fontWeight: 900
    lineHeight: 0.08
spacing:
  base: "8px"
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  xxl: "24px"
  xxxl: "32px"
  xxxxl: "40px"
rounded:
  sm: "6px"
  md: "8px"
  lg: "16px"
components:
  button-observed:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "16px 24px"
  input-observed:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "6px 12px"
---

# Design System

## Overview
Design tokens extracted from coldsolutionshvac.com. The YAML front matter contains machine-readable values observed by Dembrandt when available; the sections below summarize the extracted evidence without redesigning or correcting the source site.

## Colors
- **Primary** (#053CF7): Elected: an element class names it primary.
- **Secondary** (#0D6EFD): Observed color token extracted from the site's palette, semantic CSS, or component styles.
- **Tertiary** (#31FBED): Observed color token extracted from the site's palette, semantic CSS, or component styles.
- **Surface** (#6C757D): Observed color token extracted from the site's palette, semantic CSS, or component styles.
- **On Surface** (#212529): Observed color token extracted from the site's palette, semantic CSS, or component styles.

## Typography
- **Headline Display**: Font Awesome 6 Pro, 96px, regular
- **Headline Lg**: Oswald, 56px, bold
- **Headline Display 2**: Oswald, 40px, light
- **Headline Lg 2**: Oswald, 40px, bold
- **Headline Lg 3**: Oswald, 40px, light
- **Body Md**: Oswald, 40px, medium
- **Font source**: Google Fonts (Open Sans, Oswald, Source Sans Pro)
- **Font URLs**: https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&display=swap, https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-brands-400-0.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-brands-400-0.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-brands-400-1.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-brands-400-1.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-brands-400-2.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-brands-400-2.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-regular-400-0.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-regular-400-0.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-regular-400-1.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-regular-400-1.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-regular-400-12.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-regular-400-12.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-regular-400-13.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-regular-400-13.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-regular-400-14.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-regular-400-14.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-regular-400-15.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-regular-400-15.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-regular-400-16.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-regular-400-16.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-0.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-0.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-1.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-1.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-10.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-10.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-11.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-11.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-12.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-12.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-13.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-13.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-14.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-14.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-15.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-15.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-16.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-16.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-17.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-17.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-18.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-18.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-19.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-19.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-2.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-2.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-20.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-20.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-21.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-21.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-22.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-22.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-3.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-3.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-4.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-4.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-5.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-5.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-6.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-6.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-7.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-7.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-8.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-8.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-9.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-solid-900-9.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-0.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-0.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-1.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-1.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-10.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-10.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-11.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-11.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-12.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-12.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-13.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-13.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-14.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-14.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-15.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-15.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-16.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-16.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-17.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-17.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-18.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-18.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-19.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-19.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-2.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-2.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-20.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-20.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-21.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-21.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-22.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-22.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-3.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-3.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-4.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-4.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-5.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-5.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-6.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-6.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-7.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-7.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-8.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-8.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-9.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-thin-100-9.woff2, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-v4compatibility.ttf, https://ka-p.fontawesome.com/releases/v6.7.2/webfonts/pro-fa-v4compatibility.woff2

## Layout
Observed spacing scale: 8px spacing scale.
- **Spacing tokens**: base 8px, xs 4px, sm 6px, md 8px, lg 12px, xl 16px, xxl 24px, xxxl 32px, xxxxl 40px
- **Responsive breakpoints**: 95px, 98px, 450px, 479px, 576px, 767px

## Elevation & Depth
Observed box-shadow styles: rgba(0, 0, 0, 0.15) 0px 8px 16px 0px

## Shapes
Observed rounded-corner tokens: sm 6px, md 8px, lg 16px.

## Components
- **Buttons**: Observed sample with radius 8px, background #31FBED, text #053CF7, padding 16px 24px, border 1px solid rgb(49, 251, 237)
- **Inputs**: Observed sample with 1px solid border, 6px radius

<!-- dembrandt v0.39.2 -->
