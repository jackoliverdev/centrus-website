'use client';

import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PromptCard } from '@/components/sections/resources/prompt-card';
import { PromptLibraryHero } from '@/components/sections/resources/prompt-library-hero';
import { prompts, roles, roleCategories } from '@/content/prompt-library';

export default function PromptLibraryPage() {
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // Simple filtering
  const filteredPrompts = prompts.filter(prompt => {
    if (selectedRole !== "all" && prompt.role !== selectedRole) return false;
    if (selectedCategory !== "all" && prompt.category !== selectedCategory) return false;
    return true;
  });

  // Get categories for selected role
  const categories = selectedRole === "all" 
    ? [] 
    : roleCategories[selectedRole as keyof typeof roleCategories] || [];

  const handleItemClick = (value: string, type: 'role' | 'category') => {
    if (type === 'role') {
      setSelectedRole(value);
      setSelectedCategory("all");
      setIsRoleOpen(false);  // Close role dropdown
    } else {
      setSelectedCategory(value);
      setIsCategoryOpen(false);  // Close category dropdown
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <PromptLibraryHero />

      <div className="container mx-auto px-4 py-20">
        {/* Filters Section */}
        <div className="relative">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-primary/5 to-transparent backdrop-blur-sm" />

          <div className="relative space-y-6 rounded-xl p-8">
            {/* Filter Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-lg font-medium">Filter Prompts</h2>
              </div>
              {(selectedRole !== "all" || selectedCategory !== "all") && (
                <button
                  onClick={() => {
                    setSelectedRole("all");
                    setSelectedCategory("all");
                  }}
                  className="flex items-center gap-2 px-3 py-1 text-sm text-primary hover:text-primary/80"
                >
                  Clear all
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Dropdown Filters */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Role Dropdown */}
              <Select
                value={selectedRole}
                onValueChange={(value) => handleItemClick(value, 'role')}
                open={isRoleOpen}
                onOpenChange={setIsRoleOpen}
              >
                <SelectTrigger 
                  className="bg-background touch-manipulation select-none"
                  onTouchStart={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsRoleOpen(!isRoleOpen);
                    setIsCategoryOpen(false);
                  }}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent 
                  position="popper" 
                  side="bottom" 
                  className="z-50 max-h-[300px] select-none"
                >
                  <div onTouchStart={(e) => e.preventDefault()}>
                    <SelectItem 
                      value="all"
                      className="touch-manipulation select-none"
                      onTouchStart={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleItemClick('all', 'role');
                      }}
                    >
                      All Roles
                    </SelectItem>
                    {roles.map((role) => (
                      <SelectItem 
                        key={role} 
                        value={role}
                        className="touch-manipulation select-none"
                        onTouchStart={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleItemClick(role, 'role');
                        }}
                      >
                        {role}
                      </SelectItem>
                    ))}
                  </div>
                </SelectContent>
              </Select>

              {/* Category Dropdown */}
              <Select
                value={selectedCategory}
                onValueChange={(value) => handleItemClick(value, 'category')}
                open={isCategoryOpen}
                onOpenChange={setIsCategoryOpen}
              >
                <SelectTrigger 
                  className="bg-background touch-manipulation select-none"
                  onTouchStart={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsCategoryOpen(!isCategoryOpen);
                    setIsRoleOpen(false);
                  }}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent 
                  position="popper" 
                  side="bottom"
                  className="z-50 max-h-[300px] select-none"
                >
                  <div onTouchStart={(e) => e.preventDefault()}>
                    <SelectItem 
                      value="all"
                      className="touch-manipulation select-none"
                      onTouchStart={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleItemClick('all', 'category');
                      }}
                    >
                      All Categories
                    </SelectItem>
                    {categories.map((category) => (
                      <SelectItem 
                        key={category} 
                        value={category}
                        className="touch-manipulation select-none"
                        onTouchStart={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleItemClick(category, 'category');
                        }}
                      >
                        {category}
                      </SelectItem>
                    ))}
                  </div>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedRole !== "all" || selectedCategory !== "all") && (
          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <span>Active filters:</span>
            {selectedRole !== "all" && (
              <span className="rounded-md bg-primary/10 px-2 py-1 text-primary">
                {selectedRole}
              </span>
            )}
            {selectedCategory !== "all" && (
              <span className="rounded-md bg-primary/10 px-2 py-1 text-primary">
                {selectedCategory}
              </span>
            )}
          </div>
        )}

        {/* Prompts Grid */}
        <div className="mt-12">
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {filteredPrompts.map((prompt, index) => (
              <PromptCard key={prompt.id} prompt={prompt} index={index} />
            ))}
          </motion.div>

          {filteredPrompts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">
                No prompts found for the selected filters.
              </p>
              <button 
                onClick={() => {
                  setSelectedRole("all");
                  setSelectedCategory("all");
                }} 
                className="mt-2 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
