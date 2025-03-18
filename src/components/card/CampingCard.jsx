import { motion } from "framer-motion";
import { Link } from "react-router";
import FavoriteToggleButton from "./FavoriteToggleButton";

const CampingCard = ({ camping }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.1,
                rotate: 190
            }}
            animate={{
                opacity: 1,
                scale: 1,
                rotate: 0
            }}
            transition={{
                duration: 0.5
            }}
        >

            <article className="relative hover:scale-105 hover:duration-300 shadow-lg rounded-lg p-3">
                <Link to={`/user/camping/${camping.id}`}>
                    <div className="h-[300px] rounded-md mb-2">
                        <img
                            src={camping.secure_url}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">{camping.title}</h3>
                    </div>
                    <p className="text-sm text-gray-700">{camping.description.substring(0, 50)} ดูเพิ่มเติม...</p>
                    <div className="flex justify-between">
                        <p className="font-semibold">฿THB {camping.price}</p>
                        <p>{camping.lat.toFixed(4)}, {camping.lng.toFixed(4)}</p>
                    </div>
                </Link>
                {/* Favorite Button */}
                <div className="absolute top-4 right-4">
                    <FavoriteToggleButton 
                        campingId={camping.id}
                        isFavorite={camping.isFavorite}
                    />
                </div>

            </article>

        </motion.div>
    )
}
export default CampingCard