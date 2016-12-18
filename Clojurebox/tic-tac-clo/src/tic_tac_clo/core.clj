(ns tic-tac-clo.core
  (:gen-class))
  ;-----------------------------------------------------------------------
  ;immutables
  ;-----------------------------------------------------------------------
  (def game-board (zipmap (range 9) (repeat 9 nil)))
  (def players ["O" "X"])
  (def win-conditions [[0 1 2][3 4 5][6 7 8][0 3 6][1 4 7][2 5 8][0 4 8][2 4 6]])
  (def square-values (frequencies (flatten win-conditions)))
  
  (defn squares-available [board] (keys (filter (fn [[k v]](= nil v)) board)))
  (defn square-distribution [board] 
    (let 
	  [
	    squareoccupiers (distinct(vals board))
	  ]
	  (zipmap squareoccupiers (for [x squareoccupiers] (keys (filter (fn [[k v]] (= v x)) board))))
	)
   )
   (defn remove#predicate [examined-space] (= examined-space nil))

   (defn -scoreable-squares [board win-condition] (count(remove remove#predicate ( vals (select-keys board win-condition)))))

   (defn -scoreing-player-variability [board win-condition] (count(distinct( vals (select-keys board win-condition)))))

   (defn win-event? [board win-condition] (and (= (-scoreable-squares win-condition) (count win-condition)) (= (-scoreing-player-variability win-condition) 1)))
   
   ;(defn winner? [board winconditions])
    ;-----------------------------------------------------------------------
  ;mutables
  ;-----------------------------------------------------------------------
  ;(defn set-square [board player space] (update 
  ;-----------------------------------------------------------------------
  ;run
  ;-----------------------------------------------------------------------
  (defn game-loop 
   [
    init-game-board
    init-players
    init-win-conditions
    init-square-values
   ]
   (do
     (println init-game-board)
	 (println init-players)
	 (println init-win-conditions)
	 (println init-square-values)
	 (take 9 (cycle init-players))
	 (println (squares-available init-game-board))
	 (println (rand-nth (into [] (squares-available init-game-board))))
	 (println (assoc init-game-board (rand-nth (into [] (squares-available init-game-board))) "X"))
	 ;
   ))
  (defn -main
    "I don't do a whole lot ... yet."
    [& args]
    (println "Hello, World!")
	(game-loop game-board players win-conditions square-values)
  )

  
     ;(defn winner? [board winconditions]
   ;  (for [wincondition winconditions]
	;   (let 
	;     [
	;       xocount (count(remove remove#predicate ( vals (select-keys board wincondition))))
	;  	   distinctcount (count(distinct( vals (select-keys board wincondition))))
	;     ]
	;	 (and (= xocount 3) (= distinctcount 1))
	;   )
	; )
   ;)
   ;(defn resolve-win-condition [board wincondition]
   ;  (let 
	;    [
	;       xocount (count(remove remove#predicate ( vals (select-keys board wincondition))))
	;  	   distinctcount (count(distinct( vals (select-keys board wincondition))))
	;    ]
	;	(and (= xocount (count wincondition) (= distinctcount 1)))
	;  )
   ; )
   