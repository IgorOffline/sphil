import { Link, Section } from "@react-email/components";
import { EmailBaseLayout } from "./components/EmailBaseLayout";
import { VideoLink } from "./components/VideoLink";
import { UnsubscribeNewsletter } from "./components/UnsubscribeNewsletter";

export function Newsletter_20250930_SchellingOpen({
    unsubscribeId,
}: {
    unsubscribeId: string;
}) {
    const preview = `The Ground Quakes & Freedom Wakes`;

    return (
        <EmailBaseLayout preview={preview} isSupport={false}>
            <Section className="px-2">
                <h1
                    className="text-2xl font-bold text-gray-900"
                    style={{ textAlign: "center" }}
                >
                    The Ground Quakes & Freedom Wakes
                    <br />
                    Delving into Schelling&apos;s Masterpiece:
                    <br /> The Freedom Essay
                </h1>

                <p className="text-gray-500 my-4 text-center text-xl">
                    ⚜️{" "}
                    <Link
                        href="https://sphil.xyz/symposia/courses/schelling-freedom-essay"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline"
                    >
                        Enrollment Open
                    </Link>{" "}
                    ⚜️
                </p>

                <p className="text-gray-500 my-4">
                    Join us for an in-depth course exploring F.W.J.
                    Schelling&apos;s 1809 Freedom Essay (Philosophical Inquiries
                    into the Nature of Human Freedom), widely considered his
                    most mature and final major published work. Written at the
                    young age of 34, this &quot;giant philosophical
                    achievement&quot; in German Idealism served as
                    Schelling&apos;s robust defense and response to fierce
                    criticism from peers like Fichte and Hegel, as well as the
                    religious and academic elites of his time. Schelling sought
                    a new philosophical direction to &quot;strike down... the
                    many prejudices and... much loose and shallow chatter.&quot;
                </p>

                <VideoLink
                    text="View the course announcement video here"
                    ytUrl="https://youtu.be/w-kwUHMYIfk?si=NoXRx93A0QkCfYQ"
                />

                <p className="text-gray-500 my-4">
                    This course is designed to guide you through the text&apos;s
                    famously demanding arguments, shedding light on
                    Schelling&apos;s complex unfolding of:
                </p>
                <ul className="text-gray-500 my-4">
                    <li>Freedom and Necessity</li>
                    <li>Good and Evil</li>
                    <li>Theodicy (the problem of evil)</li>
                    <li>The Ground (the un-grounded source of existence)</li>
                </ul>
                <p className="text-gray-500 my-4">
                    For too long, Schelling was relegated to a &quot;stepping
                    stone&quot; toward Hegel. However, a significant revival of
                    interest in the <i>Freedom Essay</i>&mdash;beginning in the
                    mid-20th century, particularly among German thinkers
                    influenced by Tillich and Heidegger, and continuing to the
                    present day&mdash;highlights its enduring complexity and
                    importance. This course embraces this renewed scholarly
                    attention, what Judith Norman calls Die Schellingalter (the
                    Schelling age).
                </p>
                <p className="text-gray-500 my-4">
                    Schelling believed that understanding the essence of freedom
                    requires a complete knowledge of the whole, revealed through
                    a philosophical system that encompasses both philosophy and
                    the world.
                </p>
                <p className="text-gray-500 my-4">
                    No prior familiarity with Schelling is required—only a
                    willingness to think deeply and wrestle with these
                    fundamental, resonant questions. Bring your curiosity and
                    openness, and follow Schelling on this journey to the
                    ground, where revelation awaits.
                </p>
                <ul className="text-gray-500 my-4">
                    <li>📝 Enrollment open now!</li>
                    <li>🏛️ 8 weeks of seminars</li>
                    <li>
                        📅 First seminar: October 5 (10:00 EST / 16:00 CEST )
                    </li>
                    <li>📍 Where: Online via Zoom</li>
                    <li>🧑‍🏫 Instructor: Christopher Satoor</li>
                </ul>

                <p className="text-gray-500 my-4 text-center text-xl">
                    ✨{" "}
                    <Link
                        href="https://sphil.xyz/symposia/courses/schelling-freedom-essay"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline"
                    >
                        Find course information here
                    </Link>{" "}
                    ✨
                </p>

                <p className="text-gray-500 my-4">
                    Get clarity in our featured video series. We sit down with
                    Christopher to explore Schelling&apos;s philosophy,
                    including his foundational work Ages of the World, the
                    Freedom Essay, and broader concepts on the sources of
                    thought. Click below to learn more!
                </p>

                <div className="my-6">
                    <VideoLink
                        text="Schelling's Systems: An Experimental Approach"
                        ytUrl="https://youtu.be/DyiiOIWMjlo?si=IGnSZ44UCaCwg7X_"
                    />
                </div>
                <div className="my-6">
                    <VideoLink
                        text="Why Did the Ground Dissolve? Schelling and Inspiration"
                        ytUrl="https://youtu.be/3AQwXwqEaKs?si=GDm10GGd8Fxo6QkL"
                    />
                </div>
                <div className="my-6">
                    <VideoLink
                        text="In Discussion on Schelling's Ages of the World"
                        ytUrl="https://youtu.be/87BqORi2lzA?si=58rO3Vm3Rrsqsfkm"
                    />
                </div>
                <div className="my-6">
                    <VideoLink
                        text="Schelling and Romanticism"
                        ytUrl="https://youtu.be/3tILkPOGF_w?si=GmLEvqjFWLbC1iM_"
                    />
                </div>
                <div className="my-6">
                    <VideoLink
                        text="Sources of Thought: Becoming A Multi-dimensional Thinker"
                        ytUrl="https://youtu.be/pRCHXw5nwz8?si=QYSRAv1RbDNFD-XD"
                    />
                </div>
                <p className="text-gray-500 my-4">
                    Check also out Christopher&apos;s discussion with Dr. Sean
                    J. McGrath on Schelling from his YouTube channel{" "}
                    <i>The Young Idealist</i>.
                </p>
                <div className="my-6">
                    <VideoLink
                        text="On the Life & Philosophy of F.W.J. Schelling (1775-1854) with Dr. Sean J. McGrath (MUN)"
                        ytUrl="https://youtu.be/T2g7Rvfyk-8?si=WzLE4kuY1mIdtdG3"
                    />
                </div>

                <p className="text-gray-500 my-4">
                    Christopher Satoor has also written an introductory guide
                    for students and enthusiasts who want some help navigating
                    through Schelling&apos;s Freedom Essay.
                </p>
                <Link href="https://epochemagazine.org/77/freedom-god-and-ground-an-introduction-to-schellings-1809-freedom-essay">
                    Freedom, God, and Ground: An Introduction to
                    Schelling&apos;s 1809 Freedom Essay
                </Link>

                <p className="text-gray-500 my-4">
                    Thank you for investing your time in rigorous thought! We
                    hope this course has piqued your interest and that we will
                    see you at the seminars!
                </p>

                <p className="text-gray-500 my-4">Yours Sincerely,</p>

                <p className="text-gray-500 my-4">
                    Christopher Satoor, Filip Niklas and Ahilleas Rokni
                </p>
            </Section>
            <UnsubscribeNewsletter unsubscribeId={unsubscribeId} />
        </EmailBaseLayout>
    );
}

export default function Example() {
    return <Newsletter_20250930_SchellingOpen unsubscribeId="123" />;
}
