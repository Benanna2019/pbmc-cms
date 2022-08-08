export default {
    name: "event", 
    title: "Event", 
    type: "document", 
    fields: [
        {
            name: "title", 
            title: "Event title", 
            type: "string"
        }, 
        {
            name: "slug", 
            title: "Slug", 
            type: "string", 
            options: {
                source: "title", 
                maxLength: 96, 
            },
        },
        {
            name: "location", 
            title: "Event location", 
            type: "geopoint"
        }
    ]
}