"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { CalendarDays, Settings2, Share2, Crown, BriefcaseBusiness } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeLargeTitles"
        background="fluid"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Experience",          id: "about"},
        {
          name: "Services",          id: "services"},
        {
          name: "Packages",          id: "pricing"},
        {
          name: "Gallery",          id: "gallery"},
      ]}
      brandName="Luxe Loop"
      button={{
        text: "Book Now",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars"}}
      title="Capture Your Event in 360° Cinematic Glory"
      description="Capture the magic of your event with Luxe Loop. Our premium 360 photo booth delivers cinematic, shareable memories in stunning high definition."
      buttons={[
        {
          text: "Book Now",          href: "#contact"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-taking-photos-handsome-man_23-2148532556.jpg",          imageAlt: "360 photo booth professional photography"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-people-posing-together_23-2150171620.jpg",          imageAlt: "360 photo booth wedding party"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-posing-photo-booth_23-2150191568.jpg",          imageAlt: "modern photo booth setup event"},
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Redefining Luxury Experiences"
      description={[
        "Luxe Loop transforms standard event snapshots into immersive, cinematic 360-degree experiences. We combine state-of-the-art camera technology with elegant design to capture your events from every angle.",        "Our team is dedicated to precision, lighting, and style, ensuring your guests receive high-end keepsakes worthy of sharing on any social platform."]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={true}
      features={[
        {
          title: "Wedding Perfection",          description: "Add an unforgettable layer of glamour to your special day with slow-motion 360 memories.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-hugging-man-clinging-glasses_23-2147972063.jpg",          titleImageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=wn38nd",          buttonText: "See More"},
        {
          title: "Corporate Impact",          description: "Impress your partners and employees with high-tech brand activations that stand out in every feed.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-taking-selfie-with-all-crew_329181-6258.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/gray-concrete-pillars_181624-1500.jpg",          buttonText: "See More"},
        {
          title: "Private Parties",          description: "Turn your celebration into the main event with our stylish booth setup and cinematic video outputs.",          imageSrc: "http://img.b2bpic.net/free-photo/abstract-neon-lights-wonder-wheel_23-2148328071.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/close-up-server-farm-worker-troubleshooting-errors-laptop_482257-106219.jpg",          buttonText: "See More"},
      ]}
      title="Tailored 360 Experiences"
      description="From glamorous weddings to high-stakes corporate galas, we deliver bespoke solutions tailored to the vibe of your event."
    />
  </div>

  <div id="steps" data-section="steps">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "step1",          title: "Select Package",          value: "01",          icon: CalendarDays,
        },
        {
          id: "step2",          title: "Custom Setup",          value: "02",          icon: Settings2,
        },
        {
          id: "step3",          title: "Capture & Share",          value: "03",          icon: Share2,
        },
      ]}
      title="The Luxe Loop Flow"
      description="Getting your luxury experience started is simple, seamless, and sophisticated."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "essential",          badge: "Essential",          price: "$899",          subtitle: "Perfect for intimate gatherings",          buttons: [
            {
              text: "Inquire",              href: "#contact"},
          ],
          features: [
            "3 Hours Coverage",            "Digital Gallery",            "Basic Props"],
        },
        {
          id: "premium",          badge: "Most Popular",          price: "$1,499",          subtitle: "Comprehensive event coverage",          buttons: [
            {
              text: "Inquire",              href: "#contact"},
          ],
          features: [
            "5 Hours Coverage",            "Custom Video Branding",            "Dedicated Attendant"],
        },
        {
          id: "luxury",          badge: "Elite Corporate",          badgeIcon: BriefcaseBusiness,
          price: "$2,499",          subtitle: "The ultimate brand activation",          buttons: [
            {
              text: "Inquire",              href: "#contact"},
          ],
          features: [
            "Full Day Coverage",            "Instant Social Sharing",            "Custom Backdrops"],
        },
      ]}
      title="Exclusive Packages"
      description="Premium experiences designed to fit events of every scale and complexity."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Alexandria R.",          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-evening-street_1303-3829.jpg"},
        {
          id: "2",          name: "Michael S.",          imageSrc: "http://img.b2bpic.net/free-photo/successful-professional-sitting-office_1098-21006.jpg"},
        {
          id: "3",          name: "Isabella T.",          imageSrc: "http://img.b2bpic.net/free-photo/bride-groom-having-their-wedding-with-guests-beach_23-2149043984.jpg"},
        {
          id: "4",          name: "Jonathan D.",          imageSrc: "http://img.b2bpic.net/free-photo/elegant-man-posing-chinese-new-year_23-2148357355.jpg"},
        {
          id: "5",          name: "Sarah W.",          imageSrc: "http://img.b2bpic.net/free-photo/man-wearing-birthday-eye-mask-hat-holding-champagne-flute-pointing-finger-toward-camera_23-2147865639.jpg"},
      ]}
      cardTitle="Loved by Our Guests"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Luxe Events Co.",        "Stellar Weddings",        "Corporate Gala Pros",        "Venue Elite",        "Party Perfection",        "Cinematic Celebrations",        "Grand Gatherings"]}
      title="Trusted by Events Professionals"
      description="We partner with the best event planners and venues in the city to ensure your experience is nothing short of exceptional."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "Do you provide an attendant?",          content: "Yes, our professional booth concierge manages everything so you can focus on the party."},
        {
          id: "2",          title: "How fast are videos delivered?",          content: "Guests can share videos instantly via QR codes and email directly from the booth."},
        {
          id: "3",          title: "What equipment is used?",          content: "We use professional-grade action cameras and high-intensity lighting for the cleanest slow-motion quality."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-camera-lens-chess-game_23-2149552368.jpg"
      title="Common Questions"
      description="Everything you need to know about booking the Luxe Loop experience."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Booking"
      title="Reserve Your Luxe Loop Moment"
      description="Ready to bring the experience to your next event? Fill out the details below, and we will contact you within 24 hours."
      imageSrc="http://img.b2bpic.net/free-photo/dj-mixing-equipment-underground-club_482257-78401.jpg"
      mediaPosition="right"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Luxe Loop"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Contact Us",        href: "#contact"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}