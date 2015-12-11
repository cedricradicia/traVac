<!doctype html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	</head>
	<body>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6">
					<div ui-view="viewLeft">
						List item
						<ul>
							<li>item1</li>
							<li>item2</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6">
					<div ui-view="viewRight">
						carte
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
