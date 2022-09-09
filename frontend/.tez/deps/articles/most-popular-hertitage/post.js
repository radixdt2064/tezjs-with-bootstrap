
        import footer from "/@/components/footer.vue";
        
        export default function(registerTezPage,preload){
            const payload = {"url":"/articles/most-popular-hertitage","slots":{},"masterPageSlots":{"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]}}; 
            registerTezPage({
                components:{"footer":footer,},
                masterPage:{},
                payload:payload,
                
            })
        }    