'use client';

import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote:
      'The demo was incredibly helpful in understanding how Centrus could transform our operations. We were able to see exactly how it would fit into our workflow.',
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'TechCorp Solutions',
  },
  {
    quote:
      'Seeing Centrus in action was a game-changer. The team was knowledgeable and addressed all our concerns. Implementation was smooth, just as they demonstrated.',
    author: 'Michael Rodriguez',
    role: 'Head of Operations',
    company: 'Global Finance Corp',
  },
  {
    quote:
      "The personalized demo showed us exactly how Centrus could solve our knowledge management challenges. Three months later, and it's exceeded our expectations.",
    author: 'Emily Thompson',
    role: 'Knowledge Manager',
    company: 'HealthTech Innovations',
  },
];

export function DemoTestimonials() {
  return (
    <div className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from organizations that started with a demo and transformed their operations with
            Centrus AI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
