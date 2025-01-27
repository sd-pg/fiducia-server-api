import axios from "axios";

export const fetchGPTReport = async (projectData: any) => {
    try {
        const response = await axios.post(process.env.GPT_MICROSERVICE_URL as string, projectData);
        return response.data;
    } catch (error) {
        console.error("GPT API Error:", error);
        throw new Error("Error fetching GPT report");
    }
};
