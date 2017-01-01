(ns join.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
(defn join [from] 
	(for 
		[col [from]] 
			(for [item [col]]
				(do 
					(println "ccc")
					(println item)
				)
			)
	)
)
