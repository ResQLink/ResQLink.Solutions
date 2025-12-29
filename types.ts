import React from 'react';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface AuthState {
  user: any | null; // using any for Supabase user object simplification
  session: any | null;
  loading: boolean;
}