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
	(def square-values (frequencies (flatten win-conditions)))
	(defn remove#predicate [examined-space] (= examined-space nil))
	(defn -scoreable-square-count-in-wincondition  [board wincondition] (count(remove remove#predicate ( vals (select-keys board wincondition)))))
	(defn -scoreing-player-variability [board win-condition] (count(distinct( vals (select-keys board win-condition)))))
	(defn win-event? [board win-condition] (and (= (-scoreable-square-count-in-wincondition board win-condition) (count win-condition)) (= (-scoreing-player-variability board win-condition) 1)))
	(defn winner? [board winconditions]
		(some (fn [wc] (win-event? board wc)) winconditions)
	)
	(defn stalemate? [board] (unreduced false))


	(defn to-single-digit [somestrval] 
		(-(int (last(into () (str somestrval))))48)
	)

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
			init-square-values
			output-print-board-function
		]
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
					-stalemate 	(= true (stalemate? -gameboard))
				]
				;(println -gameboard)
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
	(game-loop game-board player-rotation win-conditions square-values print-board-default)
  )

