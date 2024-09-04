import express from 'express'
import { prettify, folder } from '@collabo-community/building-blocks';

const app = express();
const Port = 3000;

/* implemented the folder.content.list method */
prettify.log.error(folder.content.list({targetFolder : "./"}))

/* implemented the folder.content.exists method */
prettify.log.success(folder.content.exists({searchFolder: "./", searchFor: "server.js"}))

/* implemented the prettify.log.error method */ 
prettify.log.error('Server is not running');

/* implemented the prettify.log.warning method */
prettify.log.warning("Server is down");

/* implemented the prettify.log.color.none method */
prettify.log.color.none("Cancel error");

/* implemented the prettify.log.color.cyanBright method */
prettify.log.color.cyanBright("Develop the app");

/* implemented the prettify.log.color.redBold method */
prettify.log.color.redBold("Search for users", "Looking for error");

/* implemented the prettify.log.color.green method */
console.log(prettify.log.color.green("Invest in the future"));

/* implemented the prettify.text.success method */
prettify.log.error(prettify.text.success("Size"));

/* implemented the prettify.text.warning method */
console.log(prettify.text.warning("Weight"));

/* implemented the prettify.text.error method */
prettify.log.color.none(prettify.text.error("Number"));

/* implemented the prettify.text.color.redBold method */
prettify.log.warning(prettify.text.color.redBold("String"));

/* implemented the prettify.text.color.green method */
prettify.log.success(prettify.text.color.green("Boolean"));

/* implemented the prettify.text.color.cyanBright method */
prettify.log.color.cyanBright(prettify.text.color.cyanBright("Integer"));

/* implemented prettify.log.success method*/
app.listen(Port, () => {
    prettify.log.success(`Server is running on port ${Port}`);
})