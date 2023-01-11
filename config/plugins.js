module.exports = () => {
    return {
        ckeditor: {
            enabled: true,
            config: {
                editor: {
                    fontFamily: {
                        options: [
                            'default',
                            'avenir-medium',
                            'Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif',
                            'Courier New, Courier, monospace',
                            'Georgia, serif',
                            'Lucida Sans Unicode, Lucida Grande, sans-serif',
                            'Tahoma, Geneva, sans-serif',
                            'Times New Roman, Times, serif',
                            'Trebuchet MS, Helvetica, sans-serif',
                            'Verdana, Geneva, sans-serif',
                            'Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif',
                        ],
                        supportAllValues: true
                    }
                }
            }
        }
    }
}