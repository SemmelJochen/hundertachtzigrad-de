import { Divider, List, ListItem, Typography } from '@material-ui/core'
import React from 'react'
import { CrewFrame } from '../components/crewframe/CrewFrame'
import { ParallaxContainer } from '../components/parallax/ParallaxContainer'
import { SectionHeadline } from '../components/sectionheadline/SectionHeadline'
import typen from '../assets/img/foto.jpeg'

import crew from '../assets/img/3d/crew.mp4'
import crewImg from '../assets/img/3d/crew.jpg'

export const AboutUs = () => {
    return (
        <ParallaxContainer style={{ display: "flex", justifyContent: "center" }} image={typen}
            header={<SectionHeadline title="About Us" />}>
            <div style={{
                width: "75%",
                height: "100%",
                marginTop: "2rem",
                marginBottom: "2rem",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                <div style={{
                    flexShrink: 3,
                    flexGrow: 2,
                    width: "50%",
                }}>

                    <Typography variant="body1" align="justify" gutterBottom>
                        Unsere Medienlandschaft verändert sich drastisch: Während der Markt für Printmedien weiterhin schrumpft und sich zunehmend auf wenige etablierte Formate beschränkt, wächst die Bilderflut im Netz jeden Tag rasant. Um in diesem Überangebot die Aufmerksamkeit der Menschen zu erlangen, muss man kreative und vor allem zielgruppenorientierte Wege gehen.
                </Typography>
                    <Typography variant="body1" align="justify" gutterBottom>
                        Die fünf Gründer von 180Grad sind dafür aus vielerlei Gründen die richtigen Partner:
                </Typography>
                    <List>
                        <Divider variant="middle" />
                        <ListItem>
                            <Typography variant="body1" align="justify">
                                Sie sind jung, dynamisch und haben Lust, kreative Lösungen für die   unterschiedlichsten Kundenwünsche zu entwickeln. Dabei geht es   sowohl um ein Gesamtkonzept als auch um die kleinen Details, die   jedem Medium seine Identität geben. Jeder Frame soll perfekt in       Szene gesetzt sein.
                            </Typography>
                        </ListItem >
                        <Divider variant="middle" />
                        <ListItem>
                            <Typography variant="body1" align="justify">
                                Sie sind mit den sozialen Medien aufgewachsen und haben deswegen nicht nur theoretisches, sondern auch praktisches Wissen aus erster Hand – sowohl als Gestalter als auch als Konsumenten von Medien.
                    </Typography>
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem>
                            <Typography variant="body1" align="justify">
                                Alle sind gelernte Mediengestalter, kommen aber aus unterschiedlichen Bereichen: Der klassische Printbereich kann ebenso bedient werden wie alle digitalen Medien – gerne auch in Kombination. Hinzu kommen beste Kenntnisse im Bereich Bild und Ton, ohne den heute nichts mehr geht.
                    </Typography>
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem>
                            <Typography variant="body1" align="justify">
                                Ein nicht unwesentlicher Faktor ist die Freundschaft der fünf Gründer. Diese garantiert eine reibungslose und kreative Teamarbeit, bei der sich jeder auf jeden verlassen kann – kurze Wege bedeuten für Sie kurze Wartezeiten.
                    </Typography>
                        </ListItem>
                        <Divider variant="middle" />
                    </List>
                    <Typography variant="body1" align="justify" gutterBottom>
                        180Grad – das heißt, die Materie aus einer neuen Perspektive zu betrachten. Der Übergang von klassischen Inhalten in die digitale Welt ist die eine Sache, aber vielleicht verändern die neuen Möglichkeiten, die wir Ihnen aufzeigen können, auch die Sache selbst zum Positiven!
                </Typography>
                </div >
                <div style={{
                    flexShrink: 2,
                    margin: "1rem"
                }}>
                    <CrewFrame img={crew} overlay={crewImg} />
                </div>

            </div>
        </ParallaxContainer>
    )
}
