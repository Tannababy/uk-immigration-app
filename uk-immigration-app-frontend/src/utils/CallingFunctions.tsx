import { useEffect, useState } from "react";
import { fetchAllImmigrationRoutesMock } from "./APICalls";

import type { ImmigrationRoutes } from "../types/ImmigrationRoutes";
import type { InfoType } from "../types/InfoType";
import { info } from "console";

export const useImmigrationRoutes = () => {
    const [infoCardsData, setInfoCardsData] = useState<ImmigrationRoutes[]>([]); // To store the fetched data
    const [isLoading, setIsLoading] = useState(true);
        
    useEffect(() => {
        const fetchAllImmigrationRoutes = async () => {
            setIsLoading(true);
            try {
                const data: ImmigrationRoutes[] = await fetchAllImmigrationRoutesMock(); // <--- Call the function from your service file
                setInfoCardsData(data);
            } catch (error) {
                console.error("Error loading immigration data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAllImmigrationRoutes();
    }, []);
    return {infoCardsData, isLoading};
}

