async function getProcessedData(url){
    try{
        const data= await downloadData(url)
        return await processDataInWorker(data)
    } catch(e){
        const fallbackData = await downloadFallbackData(url)
        return await processDataInWorker(fallbackData)
    }
}