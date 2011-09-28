Ext.application({
    name: 'PC', //Product Configurator
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Hello Ext',
                    html : 'Hello! Welcome to Ext JS.'
                }
            ],
            controllers: [
                'Products'
            ]
        });
    }
});

