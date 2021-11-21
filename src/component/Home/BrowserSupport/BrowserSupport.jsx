import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const data = [
    {
        title: 'Google Chrome',
        subtitle:
            'Google Chrome is a cross-platform web browser developed by Google.',
        icon: 'https://assets.maccarianagency.com/browsers/chrome.png',
    },
    {
        title: 'Safari',
        subtitle:
            'Safari is a graphical web browser developed by Apple, based on the WebKit engine.',
        icon: 'https://assets.maccarianagency.com/browsers/safari.png',
    },
    {
        title: 'Microsoft Edge',
        subtitle:
            'Microsoft Edge is a web browser developed by Microsoft. It was first released for Windows 10.',
        icon: 'https://assets.maccarianagency.com/browsers/edge.png',
    },
    {
        title: 'Mozilla Firefox',
        subtitle:
            'Mozilla Firefox, or simply Firefox, is a free and web browser developed by the Mozilla.',
        icon: 'https://assets.maccarianagency.com/browsers/firefox.png',
    },
];

const BrowserSupport = () => {
    return (
        <Box p={2} mb={2}>
            <Box marginBottom={4} textAlign={'center'}>
                <Typography
                    sx={{
                        textTransform: 'uppercase',
                        fontWeight: 'medium',
                    }}
                    gutterBottom
                    color={'secondary'}
                >
                    Compatibility
                </Typography>
                <Typography fontWeight={700} variant={'h4'}>
                    Compatible with all major browsers
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {data.map((item, i) => (
                    <Grid item xs={12} md={3} key={i}>
                        <Box
                            width={1}
                            height={1}
                            data-aos={'fade-up'}
                            data-aos-delay={i * 100}
                            data-aos-offset={100}
                            data-aos-duration={600}
                        >
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'center'}
                            >
                                <Box
                                    component={Avatar}
                                    width={80}
                                    height={80}
                                    marginBottom={2}
                                    src={item.icon}
                                />
                                <Typography
                                    variant={'h6'}
                                    gutterBottom
                                    fontWeight={500}
                                    align={'center'}
                                >
                                    {item.title}
                                </Typography>
                                <Typography align={'center'} color="text.secondary">
                                    {item.subtitle}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default BrowserSupport
