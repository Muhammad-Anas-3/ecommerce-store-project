import { signOut } from "@/auth";

export function SignOutForm() {
    return (
        <form
            action={async () => {
                'use server'
                await signOut();
            }}
            className="w-full"
        >
            <button className="w-full">
                Sign Out
            </button>
        </form>
    );
}
