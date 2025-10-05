export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  coverImage?: string
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return [
    {
      slug: 'solar-energy',
      title: 'Harnessing the Power of the Sun: Exploring the World of Solar Energy',
      excerpt:
        "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into its mechanisms, benefits, and impact.",
      coverImage:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    },
    {
      slug: 'wind-power',
      title: 'Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts',
      excerpt: 'Discover how wind energy is shaping the future of clean power and sustainability.',
      coverImage:
        'https://images.unsplash.com/photo-1465101178521-c1a6fce5b91e?auto=format&fit=crop&w=800&q=80',
    },
    {
      slug: 'biomass-energy',
      title: 'From Trash to Treasure: The Promising World of Biomass Energy',
      excerpt:
        'Explore how biomass energy transforms waste into valuable resources for a sustainable future.',
      coverImage:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    },
    {
      slug: 'hydrogen-energy',
      title: 'Hydrogen: Fueling the Green Energy Revolution',
      excerpt:
        'Learn how hydrogen is becoming a key player in the transition to clean and renewable energy.',
      coverImage:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    },
  ]
}
