(ns tic-tac-clo.misc
  (:gen-class))
	(defn squares-available
		"takes a board and returns a sequence of unused (empty/nil) spaces."
		[board] 
		(keys (filter (fn [[k v]](= nil v)) board))
	)
	(defn square-distribution 
		"" 
		[board] 
		(let 
			[squareoccupiers (distinct(vals board))]
			(zipmap squareoccupiers (for [x squareoccupiers] (keys (filter (fn [[k v]] (= v x)) board))))
		)
	)
	(defn default-getplayer-moves [input]
		(let [user-entry input]
			(loop [result input]
				(if-not (or (not= "quit" result) nil)
					result
					(recur (read-line))
				)
			)
			;input
		)
	)
	(defn print-board-default [board]
		(do
			(doseq [spc board]
				(do 
					(if (= nil (val spc))
					(print (key spc))
					(print (val spc)))
					(when 
						(= 0 (mod (inc (key spc)) (int (Math/sqrt (count board)))))
						(print "\n")(flush)
					)
				)
			)
		)
	)