'use client';

import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Logo } from "./logo";

export default function Footer() {
  return (
    <footer className="bg-[#F4F0E7] pt-6 px-8 md:px-16 lg:px-24 border-t border-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Company Info */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="flex items-center mb-0 -mt-4">
              <Logo color="#2D5A3D" width={100} height={75} />
            </div>
            {/* <p className="font-semibold text-gray-600 text-xs mb-6"> */}
              {/* 123 Innovation Drive, Suite 100,<br />
              San Francisco, CA 94107 */}
            {/* </p> */}
            
            {/* Social Icons */}
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 rounded-full bg-[#00D17A] flex items-center justify-center hover:bg-[#1e3d29] transition-colors">
                <Facebook className="w-3.5 h-3.5 text-white" />
              </a>
              {/* <a href="#" className="w-8 h-8 rounded-full bg-[#00D17A] flex items-center justify-center hover:bg-[#1e3d29] transition-colors">
                <Instagram className="w-3.5 h-3.5 text-white" />
              </a> */}
              <a href="#" className="w-8 h-8 rounded-full bg-[#00D17A] flex items-center justify-center hover:bg-[#1e3d29] transition-colors">
                <Linkedin className="w-3.5 h-3.5 text-white" />
              </a>
              {/* <a href="#" className="w-8 h-8 rounded-full bg-[#00D17A] flex items-center justify-center hover:bg-[#1e3d29] transition-colors">
                <Youtube className="w-3.5 h-3.5 text-white" />
              </a> */}
            </div>
          </div>

          {/* Company, Services, and Contact - Responsive layout */}
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 col-span-3">
            {/* Company Links */}
            <div>
              <h3 className="text-xs font-bold text-[#2D5A3D] uppercase tracking-wider mb-3">Company</h3>
              <div className="flex flex-col gap-1">
                <div className="leading-none">
                  <a href="#" className="text-xs font-normal text-gray-600 hover:text-[#2D5A3D] transition-colors" onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}>Home</a>
                </div>
                <div className="leading-none">
                  <a href="about-us" className="text-xs font-normal text-gray-600 hover:text-[#2D5A3D] transition-colors">About</a>
                </div>
                <div className="leading-none">
                  <a href="/#services" className="text-xs font-normal text-gray-600 hover:text-[#2D5A3D] transition-colors" onClick={(e) => {
                    if (window.location.pathname !== '/') return;
                    e.preventDefault();
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}>Services</a>
                </div>
                <div className="leading-none">
                  <a href="contact" className="text-xs font-normal text-gray-600 hover:text-[#2D5A3D] transition-colors">Contact</a>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-xs font-bold text-[#2D5A3D] uppercase tracking-wider mb-3">Services</h3>
              <div className="flex flex-col gap-1">
                <div className="leading-none">
                  <a href="/#services" className="text-xs font-normal text-gray-600 hover:text-[#2D5A3D] transition-colors">Product & Narrative Strategy</a>
                </div>
                <div className="leading-none">
                  <a href="/#services" className="text-xs font-normal text-gray-600 hover:text-[#2D5A3D] transition-colors">Go-to-Market Strategy</a>
                </div>
                <div className="leading-none">
                  <a href="/#services" className="text-xs font-normal text-gray-600 hover:text-[#2D5A3D] transition-colors">Business Development</a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h3 className="text-xs font-bold text-[#2D5A3D] uppercase tracking-wider mb-3">Contact us</h3>
              <div className="flex flex-col gap-1">
                <div className="leading-none">
                  <a href="mailto:tjimke@nunuconsulting.com" className="text-xs text-gray-600 hover:text-[#2D5A3D] transition-colors">tjimke@nunuconsulting.com</a>
                </div>
                <div className="leading-none">
                  {/* <a href="tel:+14155551234" className="text-xs text-gray-600 hover:text-[#2D5A3D] transition-colors">(415) 555-1234</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300"></div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            Copyright 2025 © Nunu Consulting
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-xs font-normal hover:text-[#2D5A3D] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-xs font-normal hover:text-[#2D5A3D] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}