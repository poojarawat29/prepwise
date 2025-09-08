import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.actions";

const Page = async () => {
    const user = await getCurrentUser();

    // optional: handle unauthenticated users
    if (!user) {
        return <p>Please log in to generate interviews.</p>;
    }

    return (
        <>
            <h3>Interview generation</h3>

            <Agent
                userName={user.name ?? "Guest"}
                userId={user.id ?? ""}

                type="generate"
            />
        </>
    );
};

export default Page;
