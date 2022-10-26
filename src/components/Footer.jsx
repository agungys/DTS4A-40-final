import React from "react";

import { Box, Grid, Link, Container } from "@mui/material";

const Footer = () => {
    return (
        <Box bgcolor="#141414" color="#808080" mt={10}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={3}>
                        <Box>
                            <Link href="/" color="inherit">
                                Audio and Subtitles
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Media Center
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Security
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Contact Us
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box>
                            <Link href="/" color="inherit">
                                Audio Descriptions
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Investor Relations
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Legal Provisions
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box>
                            <Link href="/" color="inherit">
                                Help Center
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Jobs
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Cookie Preference
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box>
                            <Link href="/" color="inherit">
                                Gift Cards
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Term Of Use
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Corporate Information
                            </Link>
                        </Box>
                    </Grid>
                    
                </Grid>
                <Box textAlign="center">
                    Developed By : Agung Ys &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
    )
}

export default Footer;