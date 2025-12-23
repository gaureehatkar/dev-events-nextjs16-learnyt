import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";

const events = [
    {
        image: "/images/event1.png",
        title: "Google DevFest Pune 2025",
        slug: "google-devfest-pune-2025",
        location: "Pune, India",
        date: "12 Jan 2025",
        time: "10:00 AM",
    },
    {
        image: "/images/event2.png",
        title: "HackVerse India – AI & Web Hackathon",
        slug: "hackverse-india-ai-web",
        location: "Online",
        date: "18 Jan 2025",
        time: "2:00 PM",
    },
    {
        image: "/images/event3.png",
        title: "AWS Community Day Mumbai",
        slug: "aws-community-day-mumbai",
        location: "Mumbai, India",
        date: "8 Mar 2025",
        time: "10:30 AM",
    },
    {
        image: "/images/event4.png",
        title: "React India Conference 2025",
        slug: "react-india-conference-2025",
        location: "Goa, India",
        date: "11 Apr 2025",
        time: "9:00 AM",
    },
    {
        image: "/images/event5.png",
        title: "MLH Local Hack Day: Build",
        slug: "mlh-local-hack-day-build",
        location: "Hybrid",
        date: "25 Jan 2025",
        time: "11:00 AM",
    },
    {
        image: "/images/event6.png",
        title: "Open Source Summit India",
        slug: "open-source-summit-india",
        location: "Bengaluru, India",
        date: "5 Jun 2025",
        time: "10:00 AM",
    },
    {
        image: "/images/event-full.png",
        title: "Next.js & Web Performance Meetup",
        slug: "nextjs-web-performance-meetup",
        location: "Hyderabad, India",
        date: "22 Feb 2025",
        time: "6:00 PM",
    },
];

const Page = () => {
    return (
        <section>
            <h1 className="text-center">
                The Hub for Every Dev <br /> Event you can’t miss
            </h1>

            <p className="text-center mt-5">
                Hackathons, Meetups, and Conferences — All in one place
            </p>

            <ExploreBtn />

            <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>

                <ul className="events">
                    {events.map((event) => (
                        <li key={event.slug}>
                            <EventCard {...event} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Page;
