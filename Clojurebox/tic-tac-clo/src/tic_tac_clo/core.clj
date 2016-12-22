(ns tic-tac-clo.core
  (:gen-class)
  (:use tic-tac-clo.misc)
  )
	;-----------------------------------------------------------------------
	;immutables
	;-----------------------------------------------------------------------
	(def game-board (zipmap (range 9) (repeat 9 nil)))
	(def players '("O" "X"))
	(def player-rotation (take 9 (cycle players)))
	(def win-conditions [[0 1 2][3 4 5][6 7 8][0 3 6][1 4 7][2 5 8][0 4 8][2 4 6]])
	(defn remove#predicate [examined-space] (= examined-space nil))
	(defn -scoreable-square-count-in-wincondition  [board wincondition] (count(remove remove#predicate ( vals (select-keys board wincondition)))))
	(defn -scoreing-player-variability [board win-condition] (count(distinct( vals (select-keys board win-condition)))))
	(defn win-event? [board win-condition] (and (= (-scoreable-square-count-in-wincondition board win-condition) (count win-condition)) (= (-scoreing-player-variability board win-condition) 1)))
	(defn winner? [board winconditions]
		(some (fn [wc] (win-event? board wc)) winconditions)
	)
	(defn squares-available
		"takes a board and returns a sequence of unused (empty/nil) spaces."
		[board] 
		(keys (filter (fn [[k v]](= nil v)) board))
	)

	(defn stalemate? [board won?]
		(and (= 0 (count (squares-available board))) (not= true won?))  
	)
	(defn to-single-digit [somestrval] 
		(-(int (last(into () (str somestrval))))48)
	)
	(def square-values (frequencies (flatten win-conditions)))
    ;-----------------------------------------------------------------------
	;mutables
	;-----------------------------------------------------------------------
	;-----------------------------------------------------------------------
	;run
	;-----------------------------------------------------------------------
	(defn game-loop "function documentation: todo"
		[
			init-game-board
			init-player-rotation
			init-win-conditions
			output-print-board-function
		]
		(output-print-board-function init-game-board)
		(loop 
			[
				gameboard		init-game-board		
				playerrotation  init-player-rotation        
			]
			(let 
				[
					-player (first playerrotation)
					-gameboard 
						(assoc gameboard 
						(to-single-digit(read-line)) 
						-player
						)
					-win 		(= true (winner? -gameboard init-win-conditions))
					-stalemate 	(= true (stalemate? -gameboard -win))
				]
				(output-print-board-function -gameboard)
				(when (= true -win)(println "win"))
				(if-not (= true -win) 
					(recur
						-gameboard
						(rest playerrotation)
					)
				)
			)
		)
	)

	(defn -main
    "I don't do a whole lot ... yet."
    [& args]
    (println "Welcome to tic-tac-clo.")
	(game-loop game-board player-rotation win-conditions print-board-default)
  )

