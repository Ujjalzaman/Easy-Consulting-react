import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const BuildTools = () => {
    const theme = useTheme();

    return (
        <Box >
            <Box marginBottom={4}>
                <Box marginBottom={2}>
                    <Typography
                        variant="h4"
                        color="text.primary"
                        align={'center'}
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                        }}
                    >
                        Build tools and full documention
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        color="text.secondary"
                        sx={{ fontWeight: 400 }}
                        align={'center'}
                    >
                        Components, plugins, and build tools are all thoroughly documented
                        with live examples and markup for easier use and customization.
                    </Typography>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center">
            <Box
                sx={{ width: { xs: '100%', md: '50%' }}}
                width={50}
                component={SyntaxHighlighter}
                language={'javascript'}
                style={vs2015}
                padding={`${theme.spacing(2)} !important`}
                borderRadius={2}
                margin={`${theme.spacing(0)} !important`}
                bgcolor={'#21325b !important'}
            >
                {`
> $ yarn install
// Or
> $ npm install

// Everything installed!


> $ yarn start
// Or
> $ npm run start

// LiveReload started. Opening localhost:3000
        `}
            </Box>
            </Box>
        </Box>
    )
}

export default BuildTools
