let quotes = [
  {
    quote:
      "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. Passion is the driving force behind remarkable achievements. When you're deeply passionate about your work, challenges become opportunities, and every obstacle is a chance to learn and grow. Embrace your passion, and you'll unlock your true potential.",
    author: "Steve Jobs",
    tag: "inspiration",
  },
  {
    quote:
      "Life is what happens when you're busy making other plans. Despite the best-laid plans, you have to be ready to adapt and change course when life throws you a curveball. Flexibility and resilience are essential in navigating life's twists and turns. Embrace the unexpected, for it is often the source of life's most profound lessons. Learn to dance in the rain rather than wait for the storm to pass.",
    author: "John Lennon",
    tag: "life",
  },
  {
    quote:
      "Get busy living or get busy dying. The choice is yours, and the quality of your life will be determined by the decisions you make every single day. Choose wisely. Life is a series of choices, each one shaping your path and influencing your destiny. Seize the moment and live with intentionality, for it is better to have tried and failed than to live with regret and wonder what could have been.",
    author: "Stephen King",
    tag: "life",
  },
  {
    quote:
      "You have within you right now, everything you need to deal with whatever the world can throw at you. Trust in your inner strength and resilience, and you'll find a way through any challenge. Strength is not just about physical power; it's also about mental fortitude and emotional resilience. Believe in yourself, for you are capable of overcoming obstacles that may seem insurmountable.",
    author: "Brian Tracy",
    tag: "strength",
  },
  {
    quote:
      "Believe you can and you're halfway there. Confidence and self-belief are powerful tools that can propel you forward and help you overcome obstacles that once seemed insurmountable. Your mindset shapes your reality, so cultivate positivity and self-assurance. With belief in yourself, even the loftiest goals become achievable.",
    author: "Theodore Roosevelt",
    tag: "confidence",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on. No matter how hard things get, remember that time continues to move forward and so should you. Resilience is the ability to bounce back from setbacks and keep moving forward. Embrace life's challenges as opportunities for growth, and never lose sight of the fact that every ending is a new beginning.",
    author: "Robert Frost",
    tag: "perseverance",
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. True beauty and emotion come from within and are best appreciated through genuine human connection. Beauty is not just in the eye of the beholder; it's in the kindness of a smile, the warmth of a hug, and the sincerity of a shared moment. Cultivate meaningful connections, for they are the essence of a rich and fulfilling life.",
    author: "Helen Keller",
    tag: "beauty",
  },
  {
    quote:
      "It is our choices that show what we truly are, far more than our abilities. The decisions we make and the actions we take define our character and ultimately our destiny. Character is built through a series of choices, each one shaping the narrative of our lives. Choose wisely, for your choices today will determine the story you tell tomorrow.",
    author: "J.K. Rowling",
    tag: "choices",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts. True success lies in the ability to persist and keep moving forward, regardless of setbacks. Courage is not the absence of fear, but the willingness to act in spite of it. Embrace failure as a stepping stone on the path to success, and let perseverance be your guiding light in the darkest of times.",
    author: "Winston Churchill",
    tag: "perseverance",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. Authenticity is rare and valuable, and staying true to yourself is a remarkable achievement. Embrace your uniqueness, for it is the source of your power and the foundation of your identity.",
    author: "Ralph Waldo Emerson",
    tag: "authenticity",
  },
  {
    quote:
      "I have learned over the years that when one's mind is made up, this diminishes fear; knowing what must be done does away with fear. Clarity and determination are powerful antidotes to fear and uncertainty. Set your intentions clearly, and let them guide you through the darkest of times. With a resolute mind and a courageous heart, there is nothing you cannot overcome.",
    author: "Rosa Parks",
    tag: "courage",
  },
  {
    quote:
      "We must accept finite disappointment, but never lose infinite hope. While we will inevitably face setbacks and challenges, maintaining hope is essential for long-term resilience and success. Hope is the light that shines brightest in the darkest of times, guiding us through adversity and inspiring us to keep moving forward. Hold onto hope, for it is the anchor that keeps us grounded amidst life's storms.",
    author: "Martin Luther King Jr.",
    tag: "hope",
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself. Take charge of your destiny and actively shape the person you want to become through your actions and decisions. Your life is your canvas, and every choice you make is a brushstroke shaping the masterpiece of your existence. Embrace the journey of self-discovery, for therein lies the true essence of living.",
    author: "George Bernard Shaw",
    tag: "self-discovery",
  },
  {
    quote:
      "Happiness is not something ready-made. It comes from your own actions. True happiness is cultivated through your choices and the way you live your life each day. Seek joy in the simple moments, for happiness is not found in possessions or achievements but in the richness of human connections and the beauty of the present moment.",
    author: "Dalai Lama",
    tag: "happiness",
  },
  {
    quote:
      "Don't watch the clock; do what it does. Keep going. Time waits for no one, and success is achieved through consistent effort and perseverance. Every tick of the clock is a reminder that life is fleeting, urging us to make the most of every moment. Embrace the rhythm of time, and let it propel you towards your goals with unwavering determination. Remember, it's not about how fast you go, but how steadfastly you move forward.",
    author: "Sam Levenson",
    tag: "perseverance",
  },
  {
    quote:
      "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. Happiness is a byproduct of living with purpose and meaning. When we focus on contributing to the greater good, we find fulfillment that transcends momentary joy. Live not for fleeting happiness, but for lasting impact. Make each day count by striving to leave the world a little better than you found it.",
    author: "Ralph Waldo Emerson",
    tag: "purpose",
  },
  {
    quote:
      "You miss 100% of the shots you don't take. Failure to act and take risks can lead to missed opportunities and regret, while trying can lead to growth and success. Life is a series of chances, each one offering the potential for growth and discovery. Seize every opportunity with courage and conviction, for it is better to fail daring greatly than to live with the regret of unfulfilled potential. Embrace uncertainty as the gateway to growth and fulfillment.",
    author: "Wayne Gretzky",
    tag: "risk",
  },
  {
    quote:
      "Strive not to be a success, but rather to be of value. True success is measured by the positive impact you have on others and the contributions you make to the world. Success devoid of meaning is hollow and fleeting. Instead, seek to enrich the lives of others and leave a legacy of compassion and kindness. In the end, it is the lives we touch that truly define our success. Let your actions be guided by the desire to serve and uplift others.",
    author: "Albert Einstein",
    tag: "value",
  },
  {
    quote:
      "When we strive to become better than we are, everything around us becomes better too. Personal growth and self-improvement have a ripple effect on our environment and relationships. The journey of self-improvement is not solitary but interconnected. As we grow, we inspire others to do the same, creating a ripple of positive change that reverberates throughout our lives and communities. Embrace the transformative power of growth and inspire others to reach their full potential.",
    author: "Paulo Coelho",
    tag: "growth",
  },
  {
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity. Taking the first step can be daunting, but persistence and determination will carry you through. The journey of a thousand miles begins with a single step, and each subsequent step is a testament to your courage and resilience. Embrace the uncertainty of the unknown, for it is through action that we bring our dreams to life. Let your actions speak louder than your fears.",
    author: "Amelia Earhart",
    tag: "action",
  },
  {
    quote:
      "You can't go back and change the beginning, but you can start where you are and change the ending. It's never too late to take control of your future and make positive changes. The past may shape us, but it does not define us. Each moment is an opportunity to rewrite the narrative of our lives and create a future filled with hope and possibility. Embrace the power of choice and take decisive action towards the life you desire.",
    author: "C.S. Lewis",
    tag: "change",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us. Our inner strength and resilience are the true measures of our capabilities. In times of adversity, it is our inner reserves that sustain us and carry us through the darkest of days. Embrace the challenges that come your way, for they are the crucible in which your character is forged. Believe in your inherent strength and rise to meet life's challenges with unwavering resolve.",
    author: "Ralph Waldo Emerson",
    tag: "strength",
  },
  {
    quote:
      "It is never too late to be what you might have been. The potential for growth and change is always within your reach, regardless of your past experiences or current circumstances. Age is not a barrier to personal transformation, but rather a testament to the endless possibilities of human potential. Embrace the journey of self-discovery and step boldly into the future, for it is never too late to become the person you were meant to be.",
    author: "George Eliot",
    tag: "potential",
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. Life is an adventure waiting to be embraced, a journey of discovery and exploration. Don't let fear hold you back from experiencing all that life has to offer. Take risks, chase your dreams, and live without regrets.",
    author: "Mark Twain",
    tag: "adventure",
  },
  {
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. Passion is the fuel that drives extraordinary achievement, igniting the spark of creativity and fueling the fires of innovation. Find your passion, and let it guide you to greatness.",
    author: "Steve Jobs",
    tag: "work",
  },
  {
    quote:
      "Don't be afraid to give up the good to go for the great. Sometimes, leaving behind what is comfortable and familiar is necessary to achieve something extraordinary. Mediocrity is the enemy of greatness, and complacency is its ally. Embrace the discomfort of change and step boldly into the unknown, for it is only by pushing beyond our limits that we can discover our true potential.",
    author: "John D. Rockefeller",
    tag: "success",
  },
  {
    quote:
      "I attribute my success to this: I never gave or took any excuse. Accountability and perseverance are crucial elements in achieving your goals and overcoming obstacles. Excuses are the chains that bind us to mediocrity, preventing us from reaching our full potential. Take ownership of your actions and refuse to let setbacks deter you from your path. With determination and perseverance, you can overcome any challenge that stands in your way.",
    author: "Florence Nightingale",
    tag: "perseverance",
  },
  {
    quote:
      "I am not a product of my circumstances. I am a product of my decisions. The choices you make shape your destiny more than the situations you find yourself in. It's easy to blame external factors for our shortcomings, but true empowerment comes from taking responsibility for our lives. Every decision you make is a step towards the life you want to create. Choose wisely and trust in your ability to shape your own destiny.",
    author: "Stephen Covey",
    tag: "choices",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today. Let us move forward with strong and active faith. Doubt is the enemy of progress, casting shadows on our hopes and dreams. Instead of dwelling on what could go wrong, focus on the possibilities that lie ahead. With unwavering faith and determination, you can overcome any obstacle and achieve the future you envision.",
    author: "Franklin D. Roosevelt",
    tag: "faith",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams. Dreaming big and believing in yourself are key to creating a successful and fulfilling future. Your dreams are the blueprint for your destiny, guiding you towards a life of purpose and passion. Embrace your aspirations and pursue them with unwavering determination. With belief in yourself and your dreams, anything is possible.",
    author: "Eleanor Roosevelt",
    tag: "dreams",
  },
  {
    quote:
      "The best way to predict your future is to create it. Taking control of your actions and decisions allows you to shape your future according to your own vision and aspirations. Your future is not predetermined; it is yours to create. Take charge of your destiny and make choices that align with your values and goals. With intentional action and perseverance, you can build the future you desire.",
    author: "Peter Drucker",
    tag: "future",
  },
  {
    quote:
      "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it. Defeat is not the end but a stepping stone on the path to success. Embrace failure as an opportunity for growth and self-discovery. It is through adversity that we learn resilience and unlock our true potential.",
    author: "Maya Angelou",
    tag: "resilience",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it. Focus on your work and passions, and success will follow naturally. True success is not found by seeking it but by pursuing excellence in all that you do. Pour your heart and soul into your endeavors, and let your passion be your compass. When you are fully immersed in your work, success becomes a natural byproduct of your dedication and commitment.",
    author: "Henry David Thoreau",
    tag: "success",
  },
  {
    quote:
      "Food is not just eating energy. It's an experience. Food is a celebration of life, a feast for the senses that nourishes not only the body but also the soul. Each meal is an opportunity to savor the flavors of the world and connect with others around the table. Embrace the joy of cooking and sharing meals with loved ones, for food is more than sustenance—it is a source of comfort, joy, and connection.",
    author: "Guy Fieri",
    tag: "food",
  },
  {
    quote:
      "Feminism isn't about making women strong. Women are already strong. It's about changing the way the world perceives that strength. There's no limit to what we, as women, can accomplish. Feminism is a movement for equality and empowerment, challenging societal norms and dismantling barriers that hold women back. Embrace your strength and refuse to be confined by gender stereotypes, for the future is female and full of endless possibilities.",
    author: "Michelle Obama",
    tag: "feminism",
  },
  {
    quote:
      "Misogyny is the ocean; feminism is the raft that helps us stay afloat in the face of discrimination and injustice. It's a constant struggle, but one worth fighting for. Misogyny is a pervasive force that seeks to diminish and control women, but feminism offers hope and resistance. Stand tall against misogyny and lift up the voices of women everywhere, for together, we can create a world where equality reigns supreme.",
    author: "Anna Quindlen",
    tag: "misogyny",
  },
  {
    quote:
      "A girl should be two things: who and what she wants. Society often tries to dictate who girls should be and what they should aspire to, but true empowerment comes from being authentic to oneself. Break free from the confines of societal expectations and embrace your unique identity. You are not defined by others' perceptions of you but by the courage to live authentically. Be unapologetically yourself and pave the way for others to do the same.",
    author: "Coco Chanel",
    tag: "girl",
  },
  {
    quote:
      "Women are the real architects of society. Despite historical marginalization and oppression, women have always played pivotal roles in shaping culture, communities, and civilizations. From the boardroom to the battlefield, women have left an indelible mark on history, yet their contributions are often overlooked or undervalued. It's time to recognize and celebrate the immense influence of women, for they are the true architects of a better world.",
    author: "Harriet Beecher Stowe",
    tag: "women",
  },
];

export default quotes;
