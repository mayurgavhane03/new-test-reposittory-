/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#2563EB', // Deep blue (primary) - blue-600
        'primary-50': '#EFF6FF', // Very light blue (50-level shade) - blue-50
        'primary-100': '#DBEAFE', // Light blue (100-level shade) - blue-100
        'primary-500': '#3B82F6', // Medium blue (500-level shade) - blue-500
        'primary-700': '#1D4ED8', // Dark blue (700-level shade) - blue-700
        'primary-900': '#1E3A8A', // Very dark blue (900-level shade) - blue-900
        
        // Secondary Colors
        'secondary': '#64748B', // Neutral slate (secondary) - slate-500
        'secondary-50': '#F8FAFC', // Very light slate (50-level shade) - slate-50
        'secondary-100': '#F1F5F9', // Light slate (100-level shade) - slate-100
        'secondary-200': '#E2E8F0', // Light slate (200-level shade) - slate-200
        'secondary-300': '#CBD5E1', // Light slate (300-level shade) - slate-300
        'secondary-600': '#475569', // Dark slate (600-level shade) - slate-600
        'secondary-700': '#334155', // Dark slate (700-level shade) - slate-700
        'secondary-800': '#1E293B', // Very dark slate (800-level shade) - slate-800
        
        // Accent Colors
        'accent': '#F59E0B', // Warm amber (accent) - amber-500
        'accent-50': '#FFFBEB', // Very light amber (50-level shade) - amber-50
        'accent-100': '#FEF3C7', // Light amber (100-level shade) - amber-100
        'accent-600': '#D97706', // Dark amber (600-level shade) - amber-600
        'accent-700': '#B45309', // Dark amber (700-level shade) - amber-700
        
        // Background Colors
        'background': '#F8FAFC', // Soft off-white (background) - slate-50
        'surface': '#FFFFFF', // Pure white (surface) - white
        
        // Text Colors
        'text-primary': '#1E293B', // Dark slate (text primary) - slate-800
        'text-secondary': '#64748B', // Medium slate (text secondary) - slate-500
        
        // Status Colors
        'success': '#10B981', // Vibrant green (success) - emerald-500
        'success-50': '#ECFDF5', // Very light green (50-level shade) - emerald-50
        'success-100': '#D1FAE5', // Light green (100-level shade) - emerald-100
        'success-600': '#059669', // Dark green (600-level shade) - emerald-600
        'success-700': '#047857', // Dark green (700-level shade) - emerald-700
        
        'warning': '#F59E0B', // Consistent amber (warning) - amber-500
        'warning-50': '#FFFBEB', // Very light amber (50-level shade) - amber-50
        'warning-100': '#FEF3C7', // Light amber (100-level shade) - amber-100
        'warning-600': '#D97706', // Dark amber (600-level shade) - amber-600
        'warning-700': '#B45309', // Dark amber (700-level shade) - amber-700
        
        'error': '#EF4444', // Clear red (error) - red-500
        'error-50': '#FEF2F2', // Very light red (50-level shade) - red-50
        'error-100': '#FEE2E2', // Light red (100-level shade) - red-100
        'error-600': '#DC2626', // Dark red (600-level shade) - red-600
        'error-700': '#B91C1C', // Dark red (700-level shade) - red-700
        
        // Border Colors
        'border': '#E2E8F0', // Minimal border (border) - slate-200
        'border-light': '#F1F5F9', // Light border (border-light) - slate-100
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'caption': ['Inter', 'sans-serif'],
        'data': ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elevation-sm': '0 1px 3px rgba(0,0,0,0.1)',
        'elevation-md': '0 4px 6px rgba(0,0,0,0.1)',
        'elevation-lg': '0 10px 15px rgba(0,0,0,0.1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      zIndex: {
        '1000': '1000',
        '1100': '1100',
        '1500': '1500',
        '2000': '2000',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 150ms ease-out',
        'slide-down': 'slideDown 200ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}