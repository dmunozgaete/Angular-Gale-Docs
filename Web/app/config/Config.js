angular.module("config", [])
    .constant("GLOBAL_CONFIGURATION", {

        //Application data
        application: {
            version: "2.1.9",
            author: "David Antonio Muñoz Gaete",
            environment: "development",
            language: "es",
            name: "Angular-Gale Doc's",
            home: "/demo/gettingStarted/introduction"
        },

        google: {
             analytics: "UA-66082630-2"
        },

        menu: [

            //Gettting Started
            {
                label: "Primeros Pasos",
                name: "gettingStarted",
                open: true,
                items: [
                    {
                        label: "Introducción",
                        name: "introduction"
                    },

                    {
                        label: "Instalación",
                        name: "installation"
                    }
                ]
            },

            //UX References
            {
                label: "Referencia",
                name: "ux",
                items: [
                    {
                        label: "Servicios",
                        name: "services",
                        items: [

                            { name: "$Configuration" },
                            { name: "$Localization" },
                            { name: "$Api" },
                            { name: "$LocalStorage" },
                            { name: "$Timer" },
                            { name: "KQLBuilder" }

                        ]
                    }, 

                    {
                        label: "Componentes",
                        name: "components",
                        items: [

                            { name: "gale-finder" },
                            { name: "gale-loading" },
                            { name: "gale-page" },
                            { name: "gale-table" }

                        ]
                    }, 

                    {
                        label: "Filtros",
                        name: "filters",
                        items: [

                            { name: "capitalize" },
                            { name: "localize" },
                            { name: "template" }

                        ]
                    }, 

                    {
                        label: "Directivas",
                        name: "directives",
                        items: [

                            { name: "ngRange" },
                            { name: "ngRut" },
                            { name: "ngEmail" },
                            { name: "selectTextOnClick" },
                            { name: "toNumbeOnBlur" }

                        ]
                    }   
                ]
            },

            //Help US
            {
                label: "Contribuciones",
                name: "helpus",
                open: true,
                items: [
                    {
                        label: "Colaboradores",
                        name: "about"
                    },
                    {
                        label: "Recursos Externos",
                        name: "resources"
                    }
                ]
            },
        ]
    });
