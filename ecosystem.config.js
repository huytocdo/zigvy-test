module.exports = {
        apps : [{
                name: 'Zigvy-demo',
                exec_mode: 'cluster',
                instance: 'max',
                cwd: './backend',
                script: 'npm',
                args: 'start',
        }]
};
