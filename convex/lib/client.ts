import  {ConvexHttpClient , ConvexClient} from "convex/browser";

export const getHttpClient = () => {
    if (!process.env) {
        throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
    }
    return new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
};

// Subscription client
export const getClient = () => {
    if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
        throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
    }
    return new ConvexClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
}