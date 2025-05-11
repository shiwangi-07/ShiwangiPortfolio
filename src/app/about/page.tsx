import CodeSnippet from "@/components/code-snippet";
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";

const AboutMePage = () => {
    return (
        <>
            <PageHeader className="mb-10">
                <PageHeaderHeading>About Shiwangi</PageHeaderHeading>
                <PageHeaderHeading className="mt-2 text-muted-foreground">
                    Curious developer. Community builder. Competitive coder.
                </PageHeaderHeading>

                <PageHeaderDescription>
                    I'm Shiwangi Singh, a B.Tech student at IIIT Bhagalpur,
                    passionate about crafting full-stack web applications that
                    solve real-world problems. I enjoy working with tools like
                    Next.js, Tailwind CSS, and Node.js, and I’m always excited
                    to learn something new or build something useful.
                </PageHeaderDescription>

                <PageHeaderDescription>
                    Beyond development, I lead initiatives in my campus coding
                    community as AlgoZenith Chapter Lead IIIT-BH and Club Lead of
                    PyC. From curating problem sets to mentoring students and
                    organizing contests, I love helping others grow while
                    continuing to challenge myself.
                </PageHeaderDescription>

                <PageHeaderDescription>
                    Whether it’s building, leading, or solving—I'm driven by a
                    genuine love for tech and a desire to create impact.
                </PageHeaderDescription>
            </PageHeader>
            <PageHeaderHeading className="mt-2 text-muted-foreground mb-10">
                Sports Programming
            </PageHeaderHeading>
            <ol className="relative mb-10 border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-200 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-500" />
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white underline">
                        <a
                            href="https://codeforces.com/profile/_ciara_"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Codeforces ·{" "}
                            <span className="text-cyan-600 dark:text-cyan-400">
                                Specialist
                            </span>{" "}
                            (Highest Rating: 1437)
                        </a>
                    </h3>
                    <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                        Handle: _ciara_ · 400+ Problems Solved
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Ranked 2032 out of 20,035
                        participants in Educational Codeforces Round 165 (Div. 2).
                        Strengthened my ability to think critically under
                        pressure and solve diverse algorithmic challenges.
                    </p>
                </li>

                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-amber-200 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-amber-700" />
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white underline">
                        <a
                            href="https://leetcode.com/newbie_02/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LeetCode ·{" "}
                            <span className="text-amber-600 dark:text-amber-400">
                                Knight
                            </span>{" "}
                            (Highest Rating: 1872)
                        </a>
                    </h3>
                    <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                        Handle: newbie_02 · 500+ Problems Solved
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Achieved a peak contest rank of 792 out of 30,923
                        participants in Weekly Contest 429. LeetCode
                        helped sharpen my problem-solving skills with real-world
                        style questions and timed contests.
                    </p>
                </li>

                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-800" />
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white underline">
                        <a
                            href="https://www.codechef.com/users/just_shut_up"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CodeChef ·{" "}
                            <span className="text-blue-600 dark:text-blue-400">
                                5-Star
                            </span>{" "}
                            (Highest Rating: 1744)
                        </a>
                    </h3>
                    <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                        Handle: just_shut_up
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Secured a rank of 45 out of 2,753 participants in CodeChef Starters 167 Div1. Gained strong
                        consistency and accuracy under timed competitive
                        programming environments.
                    </p>
                </li>
            </ol>

            <CodeSnippet title="aboutMe.ts" code={code.aboutMe} />

            <Pager
                prevHref="/"
                nextHref="/projects"
                prevTitle="Introduction"
                nextTitle="Projects"
            />
        </>
    );
};

export default AboutMePage;
