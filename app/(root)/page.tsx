import React from "react";
import Link from "next/link";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

const page = () => {
    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
                    <p className="text-lg">
                        Practice real interview questions & get instant feedback
                    </p>
                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/interview">Start an Interview</Link>
                    </Button>

                    <Image
                        src="/robot.png"
                        alt="robo-dude"
                        width={400}
                        height={400}
                        className="max-sm:hidden"
                    />
                </div>
            </section>

            {/* ✅ Grid for side-by-side cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {dummyInterviews.map((interview) => (
                    <InterviewCard {...interview} key={interview.id} />
                ))}
            </section>

            <section className="mt-8">
                <h2>Take an Interviews</h2>

                {/* ✅ Same grid here */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id} />
                    ))}

                    <div className="interviews-section col-span-full text-center mt-6">
                        <p>There are no interviews available</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default page;
